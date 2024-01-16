const fs = require('fs');
const path = require('path');

/**
 * Creates a directory if it does not exist.
 * @param {string} directoryPath - The path of the directory to create.
 */
function createDirectoryIfNotExists(directoryPath) {
  try {
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }
  } catch (error) {
    console.error(`Error creating directory at ${directoryPath}:`, error);
  }
}

/**
 * Writes data to a file in JSON format.
 * @param {string} filePath - The path of the file to write.
 * @param {Object} data - The data to write to the file.
 */
function writeFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing file at ${filePath}:`, error);
  }
}

/**
 * Sets up necessary directories for the application.
 * @param {string} jsonDir - The directory for JSON files.
 * @param {string} pdfDir - The directory for PDF files.
 */
function setupDirectories(jsonDir, pdfDir) {
  createDirectoryIfNotExists(jsonDir);
  createDirectoryIfNotExists(pdfDir);
}

module.exports = {
  setupDirectories,
  writeFile,
};
