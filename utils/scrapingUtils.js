/**
 * Finds an element on a page by its text content.
 * @param {Object} page - The puppeteer page object.
 * @param {Object} selector - The selector object containing parent, child, and text.
 * @returns {Promise<string|null>} The text content of the found element or null if not found.
 */
const findElementByText = async (page, { parent, child, text }) => {
  return page.evaluate(({ parent, child, text }) => {
    const elements = [...document.querySelectorAll(parent)];
    const targetElement = elements.find(el => el.textContent.includes(text));
    return targetElement ? targetElement.querySelector(child)?.textContent.trim() : null;
  }, { parent, child, text });
};

/**
 * Creates a random delay to mimic human interaction.
 * @returns {Promise<void>} A promise that resolves after a random delay.
 */
const randomDelay = () => new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 2000));

module.exports = {
  findElementByText,
  randomDelay
};
