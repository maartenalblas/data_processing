import csv
import json

# open csv file and reads into csv-file
f = open('c02.csv', 'rb')
csv_file = csv.reader(f, delimiter=';')

# apends every row into list data
data = []
for row in csv_file:
    data.append(row)

# picks country and emmission out of csv
countries_emission = []
for row in data:
    column_1 = row[0]
    emmission = row[3]
    # deletes the numbers and commas of some countries
    country = ''.join([i for i in column_1 if not i.isdigit()])
    country = country.replace(',', '')
    countries_emission.append([country, emmission])

print countries_emission
