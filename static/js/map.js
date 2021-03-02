// Creating map object
    var myMap = L.map("map").setView([37.0902, -95.7129], 4);
    
    // Adding tile layer
    // L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    //   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    //   tileSize: 512,
    //   maxZoom: 18,
    //   zoomOffset: -1,
    //   id: "mapbox/light-v10",
    //   accessToken: API_KEY
    // }).addTo(myMap);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/light-v10',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: API_KEY
    }).addTo(myMap);

    
    //convert Json to GeoJson 

    var data = "../data/event_map_dataset.json";

    var jsonFeatures = [];
    data.forEach(function(point){
    var lat = point.Latitude;
    var lon = point.Longitude;
    var feature = {type: 'Feature',
        properties: point,
        geometry: {
            type: 'Point',
            coordinates: [lon,lat]
        },
    };
    jsonFeatures.push(feature);
});
var geoJson = { type: 'FeatureCollection', features: jsonFeatures };
    
L.geoJson(geoJson).addTo(myMap);   


// //Use this link to get the json data.



    
    // // Grabbing our json data..
    // d3.json(link, function(data) {
    //     L.circleMarker((["Latitude"],["Longitude"]), {
    //         opacity: 1, 
    //         color: white,
    //     }).bindPopup(["Title"]).addTo(myMap);
    // }); 

    // // Creating a layer with the retrieved data
    //     L.circleMarker([row.Lat, row.Lon], {
    //         opacity: 1,
    // //     color: chocolor,
    // //     //fillColor: chocolor,
    // //     //fillOpacity: 0.25,
    // //     //radius: rad
    // }).bindPopup(row.Event);                
    //  }; 





//papa parse method 

// Read markers data from data.csv
//     $.get('static/data/event_map_dataset.csv', function(csvString) {
//         // Use PapaParse to convert string to array of objects
//         var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;
//         // For each row in data, create a marker and add it to the map
//         // For each row, columns `Latitude`, `Longitude`, and `Title` are required
//         for (var i in data) {
//             var row = data[i];
//             var marker = L.circleMarker([row.Latitude, row.Longitude], {
//             opacity: 1
//             }).bindPopup(row.Title);
//             marker.addTo(myMap);
//         }
//   });
    

//}).bindPopup(row.Title);


    // L.circleMarker((selectedyear[i]["geometry"]["coordinates"]), {
    //                       color: chocolor,
    //                       fillColor: chocolor,
    //                       fillOpacity: 0.25,
    //                       radius: rad
    //                     }).bindPopup(selectedyear[i]["properties"]["Month"] + "/"+ selectedyear[i]["properties"]["Day"] + "/"
    //                     + selectedyear[i]["properties"]["Year"] + "<br> Shape: " + selectedyear[i]["properties"]["Shape"] + "<br>Duration of Sighting in Seconds:<br>" + selectedyear[i]["properties"]["Duration"] + "<br>" + selectedyear[i]["properties"]["City"] + ", " + selectedyear[i]["properties"]["State"]
    //                         ).openPopup());