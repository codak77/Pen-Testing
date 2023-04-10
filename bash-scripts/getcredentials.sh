#!/bin/bash

# Get the usernames and password lines from the input file(nrad.txt renamed as copy.txt)
awk '/Cleartext-Password/ {print $2 $5}' ../copy.txt > names-pass.txt

# # Remove characters like ' and ) and ,
tr -d "')" < names-pass.txt > trimmed.txt

# Store only the usernames and passwords seperated by 'space' in creds.txt
awk -F "," '{print $1 " " $2}' trimmed.txt > creds.txt

# Remove names-pass and trimmed.txt
rm names-pass.txt trimmed.txt

# Create RESULTS.txt
touch ../RESULTS.txt