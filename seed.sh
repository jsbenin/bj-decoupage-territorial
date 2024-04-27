#!/bin/bash

# Replace with your database file path
DB_FILE="tmp/db.sqlite3"

# Replace with your SQL file path
SQL_FILE="data.sql"

# Check if the SQL file exists
if [ ! -f "$SQL_FILE" ]; then
  echo "Error: SQL file '$SQL_FILE' does not exist!"
  exit 1
fi

# Open the SQLite command line tool
sqlite3 "$DB_FILE" <"$SQL_FILE"
