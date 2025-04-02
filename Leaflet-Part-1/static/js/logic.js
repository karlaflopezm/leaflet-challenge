// Create the 'basemap' tile layer that will be the background of our map.
let basemap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
});

// OPTIONAL: Step 2
// Create the 'street' tile layer as a second background of the map
let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create the map object with center and zoom options.
let myMap = L.map('map', {
  center: [44.58, -98.35],
  zoom: 4,
  minZoom: 2
});

// Then add the 'basemap' tile layer to the map.
basemap.addTo(myMap);

// OPTIONAL: Step 2
// Create the layer groups, base maps, and overlays for our two sets of data, earthquakes and tectonic_plates.
// Add a control to the map that will allow the user to change which layers are visible.
let earthquakesLayer = new L.LayerGroup();

let baseMaps = {
  "Satellite Map": basemap,
  "Street Map": streetmap
};

let overlayMaps = {
  "Earthquakes": earthquakesLayer,
};

L.control.layers(baseMaps, overlayMaps).addTo(myMap);


// Make a request that retrieves the earthquake geoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {

  // This function returns the style data for each of the earthquakes we plot on
  // the map. Pass the magnitude and depth of the earthquake into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.8,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: '#000',
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // This function determines the color of the marker based on the depth of the earthquake.
  function getColor(depth) {
    if (depth >= 90) return '#8B0000'; // Dark Red
    else if (depth >= 75) return '#CD3700'; // Medium Violet-Red
    else if (depth >= 60) return '#FF4500'; // Orange Red
    else if (depth >= 45) return '#FF8C00'; // Dark Orange
    else if (depth >= 30) return '#FFA500'; // Orange
    else if (depth >= 15) return '#FFD700'; // Gold
    else return '#FFFF00'; // Yellow
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  function getRadius(magnitude) {
    return 5 + ((magnitude ** 2) * 2);    // added 2 as base size and multiplied maginitude by 2 for easier visualization
  };

  // Add a GeoJSON layer to the map once the file is loaded.
  L.geoJson(data, {
    // Turn each feature into a circleMarker on the map.
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    // Set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // Create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
    onEachFeature: function (feature, layer) {
      var popupContent = "<h3>Location:  </h3>" + feature.properties.place +
                    "<br><h3>Magnitude: </h3>" + feature.properties.mag +
                    "<br><h3>Depth: </h3>" + feature.geometry.coordinates[2]
      layer.bindPopup(popupContent);
    }
  }).addTo(myMap);

  // OPTIONAL: Step 2
  // Add the data to the earthquake layer instead of directly to the map.
  }).addTo(map);

  // Create a legend control object.
  let legend = L.control({
    position: "bottomright"
  });

  // Then add all the details for the legend
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");

    // Initialize depth intervals and colors for the legend
    const depths = [0, 15, 30, 45, 60, 75, 90];

    // Loop through our depth intervals to generate a label with a colored square for each interval.
    for (let i = 0; i < depths.length; i++) {
      div.innerHTML +=
        '<i style="background: ' + getColor(depths[i]) + '; width: 20px; height: 20px; display: inline-block; margin-right: 8px;"></i> ' +
        depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
    }

    return div;
  };

  // Finally, add the legend to the map.
  legend.addTo(myMap);

  // OPTIONAL: Step 2
  // Make a request to get our Tectonic Plate geoJSON data.
  d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function (plate_data) {
    // Save the geoJSON data, along with style information, to the tectonic_plates layer.


    // Then add the tectonic_plates layer to the map.

  });

