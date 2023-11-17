import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from datetime import date

# Use BeautifulSoup to get the time and links for open court
html_text = requests.get('https://campusrec.mhsoftware.com/IFrameList.jsp?calendar_id=1&dayspan=8&max_events=16').text
soup = BeautifulSoup(html_text, 'lxml')
# Get hours and text
hours = soup.find_all('dl')
times = hours[0].text
times = times.split('\n')
if '' in times:
    times.remove('')

# Skip the first date (today)
times = times[1:]
# End at tomorrow's date
today = str(date.today())
tomorrow = f'{today[5:7]}/{int(today[-2:]) + 1}/{today[0:4]}'
# End index of times
stop_index = times.index(tomorrow)

# Use selenium

full_times = []

for i in range(stop_index):
    driver = webdriver.Chrome() 
    driver.get('https://campusrec.mhsoftware.com/IFrameList.jsp?calendar_id=1&dayspan=8&max_events=16')
    links = driver.find_elements(By.TAG_NAME, 'dd')
    # Use Selenium to open the popups for each link and get the url for scraping
    # Get into proper frame
    links[i].click()
    time.sleep(1)

    # Get new frame
    frame = driver.find_element(By.TAG_NAME, 'iframe')
    driver.switch_to.frame(frame)
    web_times = driver.find_elements(By.ID, 'StartTime')
    for element in web_times:
        full_times.append(element.text)
    # Close popup
    driver.switch_to.default_content()
    time.sleep(1)
    close_button = driver.find_element(By.CLASS_NAME, 'dijitDialogCloseIcon')
    time.sleep(3)
    close_button.click()
    driver.quit()

info = []
# Store info in list by court, num, time
for i in range(stop_index):
    court = times[i]
    t = full_times[i]
    court_info = ''
    if 'Basketball' in court:
        court_info += 'Basketball,'
    elif 'Volleyball' in court:
        court_info += 'Voleyball,'
    elif 'Badminton' in court:
        court_info += 'Badminton,'
    
    # Get the num
    if '&' in court:
        court_info += '2.'
    else:
        court_info += '1,'

    # Get the times
    court_info += t[5:]
    info.append(court_info)


# Create file again
with open('court_times.txt', 'w') as f:
    for line in info:
        f.write(line)
        f.write('\n')
