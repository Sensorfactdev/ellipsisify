
<p style="text-align: center">
  <img src="https://i.imgur.com/KPPHVOL.png" alt="logo" />
</p>

# ellipsisify

[![npm version](https://badge.fury.io/js/%40sensorfactdev%2Fellipsisify.svg)](https://badge.fury.io/js/%40sensorfactdev%2Fellipsisify)
[![Build Status](https://travis-ci.org/Sensorfactdev/ellipsisify.svg?branch=master)](https://travis-ci.org/Sensorfactdev/ellipsisify)
[![Coverage Status](https://coveralls.io/repos/github/Sensorfactdev/ellipsisify/badge.svg?branch=master)](https://coveralls.io/github/Sensorfactdev/ellipsisify?branch=master)


Add ellipses to strings in JavaScript

> An ellipsis (plural ellipses; from the Ancient Greek: ἔλλειψις, élleipsis, 'omission' or 'falling short') is a series of dots (typically three, such as "…") that usually indicates an intentional omission of a word, sentence, or whole section from a text without altering its original meaning

## Usage

**ellipsis at the end**

Cutting of strings on provided length and adding ellipsis.

```javascript
const ellipsisify = require('@sensorfactdev/ellipsisify');
const ellipsisified = ellipsisify('short string', 10);
// => 'short stri...'

const ellipsisifiedWithCustomChars = ellipsisify('short string', 10, null, '…');
// => 'short stri…'
```

**ellipsis in a string**

Cutting of strings on provided length.

```javascript
const ellipsisify = require('@sensorfactdev/ellipsisify');
const ellipsisified = ellipsisify('longer string with ending', 10, 5)
// => 'longer str...nding'
```

## Other resources

- [API Reference](API.md)
- [LICENSE](LICENSE)
- [Sensorfact](https://sensorfact.nl)
