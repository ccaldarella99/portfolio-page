#!/Python27/python
print('Content-type: text/html\r\n\r')

import json,urllib
data = urllib.urlopen("https://www.duolingo.com/users/ccaldarella").read()
output = json.loads(data)

fluency = output["language_data"]["es"]["fluency_score"]
fluency *= 100

print round(fluency)
