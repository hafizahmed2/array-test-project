
# array-test-project

## Project Overview
The "array-test-project" is a web scraping tool focused on enhancing privacy protection. Utilizing Puppeteer and Node.js, it scrapes data from web pages with advanced techniques to mimic human interactions and avoid detection. The project emphasizes scalability, maintainability, and readability.

## Features
- Web scraping with Puppeteer and Node.js
- Advanced element selection for complex and simple DOM elements
- Customizable scraping configurations
- Outputs data in both JSON and PDF formats
- Robust error handling and logging

## Installation
Ensure you have Node.js and npm installed.

1. **Clone the Repository**
   ```sh
   git clone https://github.com/hafizahmed2/array-test-project
   cd array-test-project
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

## Usage
To run the scraper:

1. **Execute the Script**
   ```sh
   node index.js
   ```

3. **View Results**
   - Check `./jsonFiles` and `./pdfFiles` directories.

## Structure
- `index.js`: Entry point, manages scraping.
- `config.js`: Configuration including URLs and selectors.
- `scraper.js`: Core scraping functionality.
- `fileOperations.js`: File operations like writing JSON and PDFs.
- `utils/scraping-utils.js`: Utility functions for scraping.

## Challenges and Notes
- **Selector Accuracy**: Identifying accurate selectors was challenging due to similar or missing classes in HTML elements of the scraping website.

## Future Improvements
- Enhance selector accuracy and data extraction methods.
- Implement more dynamic scraping strategies.

## Contact
Project Link: `https://github.com/hafizahmed2/array-test-project`
