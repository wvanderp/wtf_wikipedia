// 'Magic words' templates
// https://www.mediawiki.org/wiki/Help:Magic_words#Other
const inlineText = [
  // https://en.wikipedia.org/wiki/Template:%C2%B7
  ['·', '·'],
  ['·', '·'],
  ['dot', '·'],
  ['middot', '·'],
  ['•', ' • '],
  [',', ','],
  ['1/2', '1⁄2'],
  ['1/3', '1⁄3'],
  ['2/3', '2⁄3'],
  ['1/4', '1⁄4'],
  ['3/4', '3⁄4'],
  ['–', '–'],
  ['ndash', '–'],
  ['en dash', '–'],
  ['spaced ndash', ' – '],
  ['—', '—'],
  ['mdash', '—'],
  ['em dash', '—'],
  ['number sign', '#'],
  ['ibeam', 'I'],
  ['&', '&'],
  [';', ';'],
  ['ampersand', '&'],
  ['snds', ' – '],
  ['snd', ' – '],
  // these '{{^}}' things are nuts, and used as some ilicit spacing thing.
  ['^', ' '],
  ['!', '|'],
  ['\\', ' /'],
  ['`', '`'],
  ['=', '='],
  ['bracket', '['],
  ['[', '['],
  ['*', '*'],
  ['asterisk', '*'],
  ['long dash', '———'],
  ['clear', '\n\n'],
  ['h.', 'ḥ'],
]
const templates = {}
inlineText.forEach((a) => {
  templates[a[0]] = a[1]
})
module.exports = templates