// Import Osmosois 
const osmosis = require('osmosis');

// Scrape JS take 1
function results() {
    return new Promise((resolve, reject) => {
        let list = [];

        osmosis
            // Scrape results
            .get('https://evententries.com/#LiveScores$5stWag00r1gyTkXDbonSw==')
            // All apps exist inside of a div with class card-content
            .find('.card-content')
            // Create an object of data
            .set({
                Dress Score: "a.DS", // Link to the app
                Dress Place: 'a.DP', // Title
                
            })
            .data(data => {
                // Each iteration, push the data into our array
                list.push(data);
            })
            .error(err => reject(err))
            .done(() => resolve(list));
    });
}

topFreeApps().then(list => {
    console.log(list);

//     Dress
// Score
// Dress
// Place
// Stad
// Jump
// Stad
// Time
// To Date
// Score
// To Date
// Place
// XC
// Jump
// XC
// Elapsed
// XC
// Time
// Final
// Score
// Final
// Place