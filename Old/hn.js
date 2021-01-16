
// To scrape JS pages using puppeter - turns them into PDF
const puppeteer = require('puppeteer');
//Dependencies 
// with browserless
browser = await puppeteer.connect({
  browserWSEndpoint:
  'ws://' +
  browserless.ip +
  ':' +
  browserless.port +
  '?TOKEN=' +
  browserless.token +
  '&--proxy-server=' + proxy + 
  '&--window-size=1920x1080' +
  '&--no-sandbox=true' +
  '&--disable-setuid-sandbox=true' +
  '&--disable-dev-shm-usage=true' +
  '&--disable-accelerated-2d-canvas=true' +
  '&--disable-gpu=true'
});

// without browserless
browser = await puppeteer.launch({
  args: [
  '--proxy-server=' + proxy,
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage',
  '--disable-accelerated-2d-canvas',
  '--disable-gpu',
  '--window-size=1920x1080',
  ],
});

//Page level settings 
const blockedResourceTypes = [
  'image',
  'media',
  'font',
  'texttrack',
  'object',
  'beacon',
  'csp_report',
  'imageset',
];

const skippedResources = [
  'quantserve',
  'adzerk',
  'doubleclick',
  'adition',
  'exelator',
  'sharethrough',
  'cdn.api.twitter',
  'google-analytics',
  'googletagmanager',
  'google',
  'fontawesome',
  'facebook',
  'analytics',
  'optimizely',
  'clicktale',
  'mixpanel',
  'zedo',
  'clicksor',
  'tiqcdn',
];



const page = await browser.newPage();
await page.setRequestInterception(true);
await page.setUserAgent(userAgent);
page.on('request', request => {
  const requestUrl = request._url.split('?')[0].split('#')[0];
  if (
    blockedResourceTypes.indexOf(request.resourceType()) !== -1 ||
    skippedResources.some(resource => requestUrl.indexOf(resource) !== -1)
  ) {
    request.abort();
  } else {
    request.continue();
  }
});
const response = await page.goto(url, {
  timeout: 25000,
  waitUntil: 'networkidle2',
});
if (response._status < 400) {
  await page.waitFor(3000);
  let html = await page.content();
  return html;
}

//End page sttings
//Get info
// const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://evententries.com/#LiveScores$5stWag00r1gyTkXDbonSw==', {waitUntil: 'networkidle2'});
  await page.content({path: 'Event1.pdf', format: 'A4'});

  await browser.close();
})();