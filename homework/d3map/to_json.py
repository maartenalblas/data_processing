import json

with open("hpi_data.csv","rb") as lines:
    lines = lines.readlines()[:1]

data = []

for line in lines:
    splitted = line.split(',').strip()
    data.append(splitted)
json_data = json.dumps(data)
print json_data
