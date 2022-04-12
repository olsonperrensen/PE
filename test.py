from bs4 import BeautifulSoup
import json

with open('./table.html', encoding='utf-8') as f:
  content = f.read()
  table =[]
  soup = BeautifulSoup(content, 'html.parser')
  row = soup.select('tr')
  for i in row[1:]:
    col = i.select('span')
    table.append({'Departure':col[0].get_text(), 'Distance(km)':col[1].get_text(), 'Date': col[2].get_text(), 'Time':col[3].get_text(), 'Departure Time':col[4].get_text()})
  with open('table.json', 'w') as data_json:
    json.dump(table, data_json)
  with open('table.json') as test:
    print(json.load(test))