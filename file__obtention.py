# This program takes an online address, parses the data and converts it to a JSON format.
# In Alpha build

from bs4 import BeautifulSoup
from url import *
import urllib.error, urllib.parse, urllib.request, sys, ast

# Handles
go = open('go.txt','wb')
come = open('come.txt','wb')
web = urllib.request.urlopen(getURL()) # Own fn
soup = BeautifulSoup(web, 'html.parser')
l = list()

# Convert to file
go_t = soup.find(attrs = {'id':'ctl00_ContentPlaceHolderMain_GridView1'}).get_text().encode().strip()
come_t = soup.find(attrs = {'id':'ctl00_ContentPlaceHolderMain_GridView2'}).get_text().encode().strip()
go.write(go_t)
come.write(come_t)
go.close()
come.close()

# Polish
go = open('go.txt','rb')
come = open('come.txt','rb')

for line in go:
    line = line.decode().strip()
    if line == '': continue
    l.append(line)

print(l)