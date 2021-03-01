// Creating map object
var myMap = L.map("map", {
      center: [40.7128, -74.0059],
      zoom: 11
    });
    
    // Adding tile layer
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/light-v10",
      accessToken: API_KEY
    }).addTo(myMap);
    
    // //Use this link to get the csv data.
    // var link = "static/data/event_map_dataset.csv";
    
    // // Grabbing our CSV data..
    // d3.json(link, function(data) {
    //   // Creating a layer with the retrieved data
    //   L.circleMarker([row.Lat, row.Lon], {
    //     opacity: 1,
    //     color: chocolor,
    //     //fillColor: chocolor,
    //     //fillOpacity: 0.25,
    //     //radius: rad
    // }).bindPopup(row.Event);                
    // }; 

    

//}).bindPopup(row.Title);


    // L.circleMarker((selectedyear[i]["geometry"]["coordinates"]), {
    //                       color: chocolor,
    //                       fillColor: chocolor,
    //                       fillOpacity: 0.25,
    //                       radius: rad
    //                     }).bindPopup(selectedyear[i]["properties"]["Month"] + "/"+ selectedyear[i]["properties"]["Day"] + "/"
    //                     + selectedyear[i]["properties"]["Year"] + "<br> Shape: " + selectedyear[i]["properties"]["Shape"] + "<br>Duration of Sighting in Seconds:<br>" + selectedyear[i]["properties"]["Duration"] + "<br>" + selectedyear[i]["properties"]["City"] + ", " + selectedyear[i]["properties"]["State"]
    //                         ).openPopup());