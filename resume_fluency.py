import requests

page = requests.get("https://www.duolingo.com/users/ccaldarella")
page

from bs4 import BeautifulSoup
soup = BeautifulSoup(page.content, 'html.parser')
print(soup.prettify())

