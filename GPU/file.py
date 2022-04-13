import time
from getURL import getURL
from getTrainType import getTrainType
from selenium import webdriver as wd

PATH = "C:\Program Files (x86)\chromedriver.exe"
USER_URL = getURL()
TRAIN_TYPES = ["SE7","SE5","SE3"]
USER_TRAIN_TYPE = getTrainType()

wd = wd.Chrome(PATH)

wd.get(USER_URL)
wd.implicitly_wait(10)

SE7 = wd.find_element_by_xpath("/html/body/div[2]/div[3]/div/div[2]/div[2]/div[2]/div[1]/div/div/a[1]")
SE5 = wd.find_element_by_xpath("/html/body/div[2]/div[3]/div/div[2]/div[2]/div[2]/div[1]/div/div/a[2]")
SE3 = wd.find_element_by_xpath("/html/body/div[2]/div[3]/div/div[2]/div[2]/div[2]/div[1]/div/div/a[3]")

if  USER_TRAIN_TYPE.upper() == TRAIN_TYPES[0]:
    SE7.click()
elif  USER_TRAIN_TYPE.upper() == TRAIN_TYPES[1]:
    SE5.click()
elif  USER_TRAIN_TYPE.upper() == TRAIN_TYPES[2]:
    SE3.click()

time.sleep(10)
