import sqlite3
import pandas as pd

# Load CSV file
csv_file = 'cases_data.csv'
data = pd.read_csv(csv_file)

# Create a connection to the SQLite database
conn = sqlite3.connect('your_database.db')
cursor = conn.cursor()

# Create table with column names adjusted for reserved keywords
create_table_query = '''
CREATE TABLE IF NOT EXISTS cases_data (
    time_stamp TEXT,
    city TEXT,
    patient_name TEXT,
    "case" TEXT
);
'''
cursor.execute(create_table_query)

# Insert data into the table
for index, row in data.iterrows():
    cursor.execute('''
        INSERT INTO cases_data (time_stamp, city, patient_name, "case")
        VALUES (?, ?, ?, ?)
    ''', (row['time_stamp'], row['city'], row['patient_name'], row['case']))

# Commit and close the connection
conn.commit()
conn.close()
