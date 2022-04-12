from bs4 import BeautifulSoup
import json, check_train, urllib.error, urllib.parse, urllib.request


city_departure = input('From: ')
city_arrival = input('To: ')
day_departure = input('Date (YYYY-MM-DD): ')
train_type = input('Type of Train\n Options: [SE7 / SE5 / SE3]: ')
train_id = check_train(train_type)


url_handle = urllib.request.urlopen(
  'https://k.vnticketonline.vn/#/thongtinhanhtrinh/result/'
  +
  city_departure + '/'
  +
  city_arrival + '/'
  +
  day_departure
  )

  

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