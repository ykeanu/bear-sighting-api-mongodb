# Bear Sighting | RESTful API
Challenge: Bear sightings are on the rise nationwide. Unfortunately, there's no centralized website to upload and access bear sightings. This is a big problem!

Using Node.js, create an API that allows users to submit bear sightings as they happen and query the database for recent sightings with certain filters.

Your API should conform to the following spec:
```
### POST /sighting ###
Example POST body:
`{ bear_type: 'grizzly', notes: 'It was a big one!', zip_code: '90210', num_bears: 3 }`

### GET /sighting/search ###
Return an array of sightings, include a unique ID with each.
Supported query params, all optional
`start_date` (inclusive) (default: all time)
`end_date` (inclusive) (default: all time)
`bear_type` (default: all types)
`zip_code` (default: all zip codes)
`sort` (default: created timestamp, ascending. only supported value is `num_bears`)

### GET /sighting/:id ###
Return a single sighting object queried by its ID
```

## Live Link

## Demo
<!--  <img src="" width="85%" height="85%">  -->

## Installation on Local Machine
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Google Chrome
* Npm 
* Node.js v8.0+

### Installing
In the command line, type 'npm install' to download node packages for the server side. Next, navigate to the client folder and 'npm install' a second time. Go to respective package.json files to view dependencies.

1. Navigate to the root folder in the command line. 
2. Execute the following commands while in root folder:
  a. ``` npm install ``` 
    * Used to download node packages, go to package.json files to view dependencies.
  b.``` npm start ```
    * Starts the server
3. To view an extremely simple UI to visualize CRUD operations, please navigate to the public folder.
  a. Right click ```index.html``` to view (works best with Google Chrome

## Built With
* [Express](https://reactjs.org/docs/hello-world.html) - Javascrupt Framework
* [MongoDB](https://redux.js.org/) - State Container
* [Mongoose](https://github.com/ReactTraining/react-router) - Routing/Navigation
* [Mlab](https://mlab.com/) - MongoDB Database Host

## Client Directory structure
```none
.
├── src			 
│   ├── actions
│   ├── assets
│   ├── components
│   ├── constants
│   ├── reducers
│   ├── index.js
│   └── registerServiceWorker.js
├── 
│   └── 
├──                 
├──  
├── 
├── 
├── 
├──          
└──               
```


## License
This project is licensed under the BSD 3-Clause License.

## Developer
- Ysrael "Izzy" Hernandez | [GitHub](https://github.com/ykeanu)
\\
