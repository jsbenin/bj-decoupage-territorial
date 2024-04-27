#!/bin/bash

DB_FILE=tmp/db.sqlite3

SQL_FILE=data.sql

if [ ! -f "$SQL_FILE" ]; then
  echo "Error: SQL file '$SQL_FILE' does not exist!"
  exit 1
fi

sqlite3 $DB_FILE

.read $SQL_FILE

.quit
