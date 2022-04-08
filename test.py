from bs4 import BeautifulSoup
import json

with open('./table.html', encoding='utf-8') as f:
  content = f.read()
  soup = BeautifulSoup(content, 'html.parser')
  row = soup.select('tr > td > div > span')
  counter = 1
  for i in row:
    print(i.get_text())
    counter+=1
    if(counter%6==0):
      print("\n")