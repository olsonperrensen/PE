from file import export
from bs4 import BeautifulSoup
import json, check_train, urllib.error, urllib.parse, urllib.request


url_handle = urllib.request.urlopen(export())

  

with url_handle as f:
  content = f.read()
  table =[]
  soup = BeautifulSoup(content, 'html.parser')
  row = soup.select('tr')
  for i in row[1:]:
    col = i.select('span')
    table.append({'CITY':col[0].get_text(), 'KM':col[1].get_text(), 'DATE': col[2].get_text(), 'ARRIVE-HR':col[3].get_text(), 'LEAVE-HR':col[4].get_text()})
  with open('table.json', 'w') as data_json:
    json.dump(table, data_json)
  with open('table.json') as test:
    print(json.load(test))