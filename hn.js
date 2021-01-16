
// To scrap JS pages using puppeter - turns them into PDF
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://evententries.com/#LiveScores$5stWag00r1gyTkXDbonSw==', {waitUntil: 'networkidle2'});
  await page.content({path: 'Event1.html', format: 'A4'});

  await browser.close();
})();