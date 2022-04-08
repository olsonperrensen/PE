# This program takes an online address, parses the data and converts it to a JSON format.
# In Alpha build

from bs4 import BeautifulSoup
from url import *
import urllib.error, urllib.parse, urllib.request, sys, ast, certifi

# Handles
go = open('go.txt','wb')
web = urllib.request.urlopen("https://k.vnticketonline.vn/#/thongtinhanhtrinh/result/SGO/HNO/2022-04-28/76725", cafile=certifi.where()) # Own fn
soup = BeautifulSoup(web, 'html.parser')
l = list()

# Convert to file
go_t = soup()
print(go_t)