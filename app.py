from flask import Flask, render_template, request
import csv
from collections import Counter

app = Flask(__name__)

def get_cases_by_city(city):
    case_counter = Counter()
    
    # Read the CSV file
    with open('cases_data.csv', mode='r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if row['city'].strip().lower() == city.strip().lower():
                case_counter[row['case']] += 1

    return case_counter.most_common()

@app.route('/', methods=['GET', 'POST'])
def index():
    cases = []
    city = ""
    if request.method == 'POST':
        city = request.form['city']
        cases = get_cases_by_city(city)
    
    return render_template('search.html', cases=cases, city=city)

if __name__ == '__main__':
    app.run(debug=True)
