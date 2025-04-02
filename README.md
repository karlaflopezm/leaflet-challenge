# Leaflet Challenge

## Background
The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, ecosystem health, and environmental changes. Their work helps educate the public and government organizations about pressing global issues.

The USGS collects a massive amount of earthquake data daily but currently lacks an effective visualization tool. This project aims to create a meaningful way to display earthquake data using Leaflet.js, improving public understanding and securing potential funding.

## Repository Setup
1. **Create a New Repository**: Name it `leaflet-challenge`.
2. **Clone the Repository**: Download it to your local computer.
3. **Organize the Project**:
   - Create two directories: `Leaflet-Part-1` and `Leaflet-Part-2`.
   - Ensure all necessary HTML and JavaScript files are included.
4. **Push to GitHub**: Commit and push the changes to the repository.

## Instructions
### Part 1: Earthquake Visualization
1. **Obtain Earthquake Data**:
   - Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).
   - Select a dataset (e.g., "All Earthquakes from the Past 7 Days").
   - Use the provided URL to fetch the JSON data.

2. **Visualizing Data with Leaflet**:
   - Create a map using Leaflet.js.
   - Plot earthquakes using longitude and latitude coordinates.
   - Customize markers:
     - **Size**: Corresponds to earthquake magnitude.
     - **Color**: Represents earthquake depth (deeper earthquakes appear darker).
   - Include popups with detailed earthquake information.
   - Add a legend to explain the data representation.

### Part 2: Additional Data (Optional)
- Expand the visualization by incorporating additional datasets or features.

## Technologies Used
- Leaflet.js
- JavaScript
- HTML/CSS
- USGS GeoJSON Data

## How to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR-USERNAME/leaflet-challenge.git
   ```
2. Navigate to the project directory:
   ```sh
   cd leaflet-challenge/Leaflet-Part-1
   ```
3. Open `index.html` in a browser.

## Credits
- Data sourced from the [United States Geological Survey (USGS)](https://www.usgs.gov/).

