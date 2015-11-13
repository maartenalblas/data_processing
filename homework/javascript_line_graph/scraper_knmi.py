import csv

# open csv file and reads into csv-file
f = open('KNMI_20151113.txt')
csv_file = csv.reader(f)

# apends every row into list data
body_and_header = []
for row in csv_file:
    body_and_header.append(row)

# cuts of the header info
body = body_and_header[12:]

# reformats every row and appends it to temp_dates
temp_dates = []
for row in body:
    year = row[1][0:4]
    month = row[1][4:6]
    day = row[1][6:8]
    date = year + '/' + month + '/' + day
    temp = row[2].strip()
    temp_date = []
    temp_date.append(date)
    temp_date.append(temp)
    temp_dates.append(temp_date)

print temp_dates

output = open('date_temp.csv', 'wb')
writer = csv.writer(output)
writer.writerow(['Date', 'Temp'])
for temp_date in temp_dates:
    writer.writerow(temp_date)
