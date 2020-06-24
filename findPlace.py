import random
import sys
from pprint import pprint
from yelpapi import YelpAPI

yelp_api = YelpAPI("k2wveRe1gZI92NEveqKIiySGDdWBWi2trTcLw5XCCGH3U2Y0s9qocYX6GUP8b-fGzUCDVCbWOHhh3tHeOi6QqQVcTmkPUlrEXLOWDJ0OwiqQI3P8jX-j7MVOT_KtXnYx", timeout_s=3.0)

inputTerm = input("Search Term: ")
inputLocation = input("Your Location: ")
inputPrice = input("High or low price?: ").lower()
# inputLimit = 10 
inputDistance = int(input("Maximum distance in miles: "))

# inputTerm = sys.argv[1]
# inputLocation = sys.argv[2]
# inputPrice = sys.argv[3]
# inputLimit = 10
# inputDistance = sys.argv[4]

# print(inputTerm + " " + inputLocation + " " + inputPrice + " " + inputDistance)

# rand = random.randint(0, int(inputLimit)-1)

if inputTerm == '':
    if inputPrice == '':
        search_results = yelp_api.search_query(location = inputLocation, radius = int(1609*inputDistance))
    else:
        if inputPrice == "low":
            search_results = yelp_api.search_query(location = inputLocation, price = "1, 2", radius = int(1609*inputDistance))
        elif inputPrice == "high":
            search_results = yelp_api.search_query(location = inputLocation, price = "3, 4", radius = int(1609*inputDistance))
        else:
            search_results = yelp_api.search_query(location = inputLocation, radius = int(1609*inputDistance))
else:
    if inputPrice == '':
        search_results = yelp_api.search_query(term = inputTerm, location = inputLocation, radius = int(1609*inputDistance))
    else:
        if inputPrice == "low":
            search_results = yelp_api.search_query(term = inputTerm, location = inputLocation, price = "1, 2", radius = int(1609*inputDistance))
        elif inputPrice == "high":
            search_results = yelp_api.search_query(term = inputTerm, location = inputLocation, price = "3, 4", radius = int(1609*inputDistance))
        else:
            search_results = yelp_api.search_query(term = inputTerm, location = inputLocation, radius = int(1609*inputDistance))

# search_results = yelp_api.search_query(term = inputTerm, location = inputLocation, radius = int(1609*inputDistance))
print(search_results['total'])
    
if search_results['total'] >= 20:
    rand = random.randint(0, 20)
elif search_results['total'] == 0:
    #throw some error
    print("should be some error here")
else:
    rand = random.randint(0, search_results['total']-1)

# rand = random.randint(0, len(search_results)-1)
# pprint(search_results) #prints all results
restaurants = search_results.values() #gets the values from the dictionary
restList = list(restaurants) #converts the values into a list
chosenRestaurant = restList[0][rand] #gets the random restaurant
# print("\n\n\n")

pprint(chosenRestaurant)