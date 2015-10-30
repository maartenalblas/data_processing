#!/usr/bin/env python
# Name:
# Student number:
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv

from pattern.web import URL, DOM, plaintext

from exercise import split_string

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'


def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''

    # ADD YOUR CODE HERE TO EXTRACT THE ABOVE INFORMATION ABOUT THE
    # HIGHEST RANKING TV-SERIES
    # NOTE: FOR THIS EXERCISE YOU ARE ALLOWED (BUT NOT REQUIRED) TO IGNORE
    # UNICODE CHARACTERS AND SIMPLY LEAVE THEM OUT OF THE OUTPUT.


    series = []

    # Loops over top 5 imdb series
    for index in dom.by_tag("tr.even detailed")[:5]:

        actors = []
        genres = []
        serie = []

        # Extracts the required fields of the html
        for td in index.by_tag("td.number")[:1]:
            ranking = unicode(plaintext(td.content)) # Extract ranking
        for td in index.by_tag("td.title")[:1]:
            for a in td.by_tag("a")[:1]:
                title = unicode(plaintext(a.content)) # Extract title
            for span in td.by_tag("span.credit")[:1]:
                for a in span.by_tag("a"):
                    actors.append(unicode(plaintext(a.content))) # Extract actors
            for span in td.by_tag("span.genre")[:1]:
                for a in span.by_tag("a"):
                    genres.append(unicode(plaintext(a.content))) # Extract genres
            for span in td.by_tag("span.runtime")[:1]:
                runtime = unicode(plaintext(span.content)) # Extract runtime with minute
                runtime_split = split_string(runtime, ' ') # Split number from minute
                runtime_num = runtime_split[0]

        # append required fields to serie list
        serie.append(title)
        serie.append(ranking)
        serie.append(genres)
        serie.append(actors)
        serie.append(runtime_num)

        # appends serie to series
        series.append(serie)
        
    return series

def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])

    for serie in tvseries:
        writer.writerow(serie)

    # ADD SOME CODE OF YOURSELF HERE TO WRITE THE TV-SERIES TO DISK

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)
         # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)
