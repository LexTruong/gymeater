import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Use BeautifulSoup to get the time and links for open court
html_text = requests.get('https://campusrec.mhsoftware.com/IFrameList.jsp?calendar_id=1&dayspan=8&max_events=16').text
soup = BeautifulSoup(html_text, 'lxml')
# Get hours and text
hours = soup.find_all('dl')
lines = []
for hour in hours:
    lines.append(hour.text)

# Use Selenium to open the popups for each link and get the url for scraping
driver = webdriver.Chrome()
driver.get('https://campusrec.mhsoftware.com/IFrameList.jsp?calendar_id=1&dayspan=8&max_events=16')
# Get into proper frame
time.sleep(1)
links = driver.find_elements(By.TAG_NAME, 'dd')
links[0].click()
time.sleep(3)
# Get new frame
frame = driver.find_element(By.TAG_NAME, 'iframe')
driver.switch_to.frame(frame)
times = driver.find_elements(By.ID, 'StartTime')
for element in times:
    print(element.text)
# Close popup
close_button = driver.find_element(By.CLASS_NAME, 'closeText')
close_button.click()
time.sleep(3)

driver.quit()
