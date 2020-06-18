import random
from pprint import pprint
from yelpapi import YelpAPI

yelp_api = YelpAPI("k2wveRe1gZI92NEveqKIiySGDdWBWi2trTcLw5XCCGH3U2Y0s9qocYX6GUP8b-fGzUCDVCbWOHhh3tHeOi6QqQVcTmkPUlrEXLOWDJ0OwiqQI3P8jX-j7MVOT_KtXnYx", timeout_s=3.0)

inputTerm = input("Search Term: ")
inputLocation = input("Your Location: ")
inputPrice = input("High or low price?: ").lower()
inputLimit = 10 
inputDistance = int(input("Maximum distance in miles: "))

rand = random.randint(0, int(inputLimit)-1)

if inputPrice == '':
    search_results = yelp_api.search_query(term = inputTerm, location = inputLocation, limit = inputLimit, radius = int(1609*inputDistance))
else:
    if inputPrice == "low":
        search_results = yelp_api.search_query(term = inputTerm, location = inputLocation, price = "1, 2", limit = inputLimit, radius = int(1609*inputDistance))
    elif inputPrice == "high":
        search_results = yelp_api.search_query(term = inputTerm, location = inputLocation, price = "3, 4", limit = inputLimit, radius = int(1609*inputDistance))
    else:
        search_results = yelp_api.search_query(term = inputTerm, location = inputLocation, limit = inputLimit, radius = int(1609*inputDistance))

# pprint(search_results) #prints all results
restaurants = search_results.values() #gets the values from the dictionary
restList = list(restaurants) #converts the values into a list
chosenRestaurant = restList[0][rand] #gets the random restaurant
print("\n\n\n")

pprint(chosenRestaurant)