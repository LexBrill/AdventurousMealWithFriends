from flask import Flask, jsonify, request
from yelpapi import YelpAPI
import random
yelp_api = YelpAPI("k2wveRe1gZI92NEveqKIiySGDdWBWi2trTcLw5XCCGH3U2Y0s9qocYX6GUP8b-fGzUCDVCbWOHhh3tHeOi6QqQVcTmkPUlrEXLOWDJ0OwiqQI3P8jX-j7MVOT_KtXnYx", timeout_s=3.0)
inputLimit = 10
app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def index():
    if (request.method == 'POST'):
        some_json =  request.get_json()
        return jsonify({'you sent': some_json})
    else:
        return jsonify({"Message": "sick get dude"})

@app.route('/params/<string:inputTerm>/<string:inputLocation>/<string:inputPrice>/<int:inputDistance>', methods=['GET'])
def runFindPlace(inputTerm, inputLocation, inputPrice, inputDistance):
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
    restaurants = search_results.values() #gets the values from the dictionary
    restList = list(restaurants) #converts the values into a list
    chosenRestaurant = restList[0][rand] #gets the random restaurant
    return chosenRestaurant

    # return jsonify({'result': term + location})

if __name__ == '__main__':
    app.run(debug = True)