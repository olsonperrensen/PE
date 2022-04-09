from bs4 import BeautifulSoup
import json

with open('./table.html', encoding='utf-8') as f:
  content = f.read()
  table ={
    'Departure': [],
    'Distance(km)': [],
    'Date': [],
    'Time': [],
    'Departure Time': []
  }
  soup = BeautifulSoup(content, 'html.parser')
  row = soup.select('tr')
  for i in row[1:]:
    col = i.select('span')
    table['Departure'].append(col[0].get_text())
    table['Distance(km)'].append(col[1].get_text())
    table['Date'].append(col[2].get_text())
    table['Time'].append(col[3].get_text())
    table['Departure Time'].append(col[4].get_text())
  with open('table.json', 'w') as data_json:
    json.dump(table, data_json)
  with open('table.json') as test:
    print(json.load(test))