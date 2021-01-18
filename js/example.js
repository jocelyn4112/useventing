
// Scraping using Puppeter - gets JS to html
const puppeteer = require('puppeteer');



(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://evententries.com/#LiveScores$5stWag00r1gyTkXDbonSw==', {waitUntil: 'networkidle2'});
  await page.content({path: 'Event2.html', format: 'A4'});

  await browser.close();
})();

