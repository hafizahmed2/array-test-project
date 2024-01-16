module.exports = {
  url: 'https://abrahamjuliot.github.io/creepjs/',
  selectors: {
    trustScore: { parent: '.col-six > div', child: '.unblurred', text: 'trust score' },
    lies: { parent: '.col-six > div', child: 'span.scale-up', text: 'lies' },
    bot: { parent: '.block-text', child: '.unblurred', text: 'bot:' },
    fingerprintId: 'div.fingerprint-header .ellipsis-all'
  },
  jsonDir: './jsonFiles',
  pdfDir: './pdfFiles'
}
