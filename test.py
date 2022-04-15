from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import json
from datetime import datetime



BASE_URL = 'https://k.vnticketonline.vn/#/thongtinhanhtrinh/gadi'
options = Options()
options.add_argument('disable-infobars')
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
driver.get(BASE_URL)
driver.implicitly_wait(15)
departure = driver.find_element(By.CSS_SELECTOR, '#txtgadi')
departure.send_keys(input('from: '))
departure.send_keys(Keys.ARROW_DOWN)
departure.send_keys(Keys.ENTER)
destination = driver.find_element(By.CSS_SELECTOR, '#txtGaDen')
destination.send_keys(input('to: '))
destination.send_keys(Keys.ARROW_DOWN)
destination.send_keys(Keys.ENTER)
date = datetime.strptime(input('enter date(yyyy/mm/dd)'), '%Y %m %d')
driver.get(f"{driver.current_url.replace('date', 'tau')}/{date.strftime('%Y-%m-%d')}")
time.sleep(3)
page_source = driver.page_source
soup = BeautifulSoup(page_source, 'html.parser')
trainL = soup.select('.list-group h4')
if trainL:
    count = 1
    for i in trainL:
        print(i.get_text())
    train = input('Select the train you want: ')
    for i in trainL:
        if train.lower() == i.get_text().strip(' ').lower():
            break
        else: 
            count +=1
    btn = driver.find_element(By.CSS_SELECTOR, f'div.list-group > a:nth-child({count})')
    btn.click()
    time.sleep(2)
    page_source = driver.page_source
    soup = BeautifulSoup(page_source, 'html.parser')
    table = []
    row = soup.select('div.col-md-7 tr')
    for i in row[1:]:
        col = i.select('span')
        table.append({'CITY':col[0].get_text(), 'KM':col[1].get_text(), 'DATE': col[2].get_text(), 'ARRIVE-HR':col[3].get_text(), 'LEAVE-HR':col[4].get_text()})
    with open('table.json', 'w') as data_json:
        json.dump(table, data_json)
    with open('table.json') as test:
        print(json.load(test))
else:
    print('cant find any train to this destination')
# driver.quit()