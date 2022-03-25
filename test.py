from doctest import DocTestRunner
from traceback import print_tb
from bs4 import BeautifulSoup
import requests, sys

web = requests.get('http://giotaugiave.dsvn.vn/')
# for line in web:
#     line.decode()
#     print(line)
soup = BeautifulSoup(web.content, 'html.parser')

tbody = soup.find(attrs = {'id':'mainContent'}).get_text()
print(tbody)

# with open('out.txt', 'w') as gen_file:
#    gen_file.write(tbody)
