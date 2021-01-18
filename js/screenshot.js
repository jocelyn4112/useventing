
//So get screen shot of page - from Jon
//Use this one
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://evententries.com/#LiveScores$5stWag00r1gyTkXDbonSw==', {waitUntil: 'networkidle2'});
  var html = await page.content();
  fs.writeFile('Event1.html', html, function (err) {
      if (err) {
          return console.log(err);
      };
  });
  await browser.close();
})();