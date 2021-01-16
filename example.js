
// Scraping using Puppeter
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://evententries.com/#LiveScores$5stWag00r1gyTkXDbonSw==', {waitUntil: 'networkidle2'}););
  await page.screenshot({path: 'Event1.png'});

  await browser.close();
})();