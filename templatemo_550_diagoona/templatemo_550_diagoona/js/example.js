
// Scraping using Puppeter
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://evententries.com/#LiveScores$5stWag00r1gyTkXDbonSw==');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();