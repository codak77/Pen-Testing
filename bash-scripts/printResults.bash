#!/bin/bash

# Get/store the usernames and password that are valid from RESULTS.txt
awk '$0 !~ /Invalid Username\/Password/' ../RESULTS.txt > ../VALID.txt


# Print/store the usernames that currently have data
awk '$0 !~ /-/' ../VALID.txt > ../HAVE-DATA.txt

# Remove RESULTS.txt to prevent duplicate and a large RESULTS.txt (because of fs.append 👀)
rm ../RESULTS.txt