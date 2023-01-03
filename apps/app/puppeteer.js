const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('localhost:3000', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'example.png' });

  browser.close();
})();