# Bear Sighting | RESTful API with MongoDB
Bear sightings are on the rise nationwide. Unfortunately, there's no centralized website to upload and access bear sightings. This is a big problem! 

## Live Link

## Demo
<!--  <img src="" width="85%" height="85%">  -->

### Get Application Running on Local Machine
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

1. Navigate to the root folder in the command line. 
2. Execute the following commands while in root folder:
  a. ``` npm install ``` 
    * Used to download node packages, go to package.json files to view dependencies.
  b.``` npm start ```
    * Starts the server
3. To view an extremely simple UI to visualize CRUD operations, please navigate to the public folder.
  a. Right click ```index.html``` to view (works best with Google Chrome

### Prerequisites
* Google Chrome
* Npm 
* Node.js v8.0+

## Built With
* [Node](https://nodejs.org/en/) - Serverside Javascript
* [Express](https://expressjs.com/) - Web Framework for Node.js
* [MongoDB](https://www.mongodb.com/) - NoSQL Database
* [Mongoose](http://mongoosejs.com/) - MongoDB Object Modeling for Node.js
* [Mlab](https://mlab.com/) - MongoDB Database Host

## Original Coding Challenge
Using Node.js, create an API that allows users to submit bear sightings as they happen and query the database for recent sightings with certain filters.

Your API should conform to the following spec:
```
POST /sighting
Example POST body:
`{ bear_type: 'grizzly', notes: 'It was a big one!', zip_code: '90210', num_bears: 3 }`

GET /sighting/search
Return an array of sightings, include a unique ID with each.
Supported query params, all optional
`start_date` (inclusive) (default: all time)
`end_date` (inclusive) (default: all time)
`bear_type` (default: all types)
`zip_code` (default: all zip codes)
`sort` (default: created timestamp, ascending. only supported value is `num_bears`)

GET /sighting/:id
Return a single sighting object queried by its ID
```


## License
This project is licensed under the BSD 3-Clause License.

## Developer
- Ysrael "Izzy" Hernandez | [GitHub](https://github.com/ykeanu)
