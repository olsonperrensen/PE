from bs4 import BeautifulSoup

with open('./table.html', encoding='utf-8') as f:
  content = f.read()
  soup = BeautifulSoup(content, 'html.parser')
  row = soup.select('tr > td > div > span')
  print(row)