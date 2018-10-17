# Neighborhood Maps

A Single Page App made by using create-react-app, Google Maps API and Foursquare API showcasing the neighbordhood has to offer.
> Shows the Metro Station of Delhi 

> Search Metro stations and last result will animate


## Installation

### Quick install
In your terminal write these commands in order:

```
git clone <url of this repo>
cd neighborhood-map
npm install (this may take few minutes)
npm start
```

### Overview

As soon the app starts, it makes request to FourSquare API and fetches the locations details. The location is then rendered on the map. 

### Marker and InfoWindow

Clicking on the Marker open an InfoWindow :

* Shows an image
* Name of the location

### ServiceWorker

The Application also uses ServiceWorker which works in the build mode only.
To test ServiceWorker, you must make a prdouction build first. 
