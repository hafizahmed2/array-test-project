const puppeteer = require('puppeteer');
const path = require('path');
const config = require('./config');
const { scrapeData } = require('./scraper');
const { setupDirectories, writeFile } = require('./utils/fileOperations');

/**
 * Main execution function.
 * This asynchronous function launches the browser, performs scraping operations,
 * and then closes the browser.
 */
(async () => {
  try {
    // Launching puppeteer browser
    const browser = await puppeteer.launch({ headless: true });
    // Creating a new page in the browser
    const page = await browser.newPage();

    // Performing scraping operations
    await performScrapingOperations(page);

    // Closing the browser after operations are complete
    await browser.close();
  } catch (error) {
    // Logging any errors that occur during the scraping process
    console.error("An error occurred during the scraping process:", error);
  }
})();

/**
 * Performs the scraping operations.
 * This function sets up necessary directories, iterates over a set number of times
 * to scrape data, saves the data in JSON format, and creates PDFs of the pages.
 * @param {Object} page - The puppeteer page object.
 */
async function performScrapingOperations(page) {
  // Setting up directories for storing JSON and PDF files
  setupDirectories(config.jsonDir, config.pdfDir);

  for (let i = 0; i < 3; i++) {
    // Scraping data for each iteration
    const data = await scrapeData(page, i + 1, config);
    console.log('Scraped Data:', data);

    // Saving scraped data in JSON format
    const jsonFilePath = path.join(config.jsonDir, `data-${i+1}.json`);
    writeFile(jsonFilePath, data);
    
    // Creating a PDF of the current page state
    const pdfFilePath = path.join(config.pdfDir, `page-${i + 1}.pdf`);
    await page.pdf({ path: pdfFilePath, format: 'A4' });
  }
}
