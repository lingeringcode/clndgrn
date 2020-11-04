# Rhetmap.org Locations

This is a dynamically loading map of points that show the locations of 6 years of Rhetoric, Composition, and Techcomm jobs (2012-13 — 2019-20).

## Data format and processing

- The final data set is a list of each U.S.-based job with currently 3 properties of information: 1) Geocoded coordinates (lat, lng), Address, Institution:
<pre>
{
  "coordinates":[-80.420018,37.231681],
  "citystate":"Blacksburg, VA 24061",
  "institution":"Virginia Tech"
},
...
</pre>

## Data processing

1. Download the data from [rhetmap.org](http://www.rhetmap.org). Each year must be downloaded from a Google Sheets separately and saved as a CSV file.
2. Used Node.js/Javascript to:
   1. combine the CSV files into one JSON output file.
   2. Clean each address for geocoding and output as CSV file for geocoding.
   3. Command-line Node.js module ```csvgeocode``` to geocode the addresses and output a new csv with lat and lng.
   4. Transform the data into a final structure and output as a JSON file.
