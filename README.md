# ellipsisify
Add ellipses to strings in JavaScript

> An ellipsis (plural ellipses; from the Ancient Greek: ἔλλειψις, élleipsis, 'omission' or 'falling short') is a series of dots (typically three, such as "…") that usually indicates an intentional omission of a word, sentence, or whole section from a text without altering its original meaning

## Usage

*ellipsis at the end*
Cutting of strings on provided length and adding ellipsis.

```javascript
const ellipsisify = require('@sensorfactdev/ellipsisify');
const ellipsisified = ellipsisify('short string', 10);
// => 'short stri...'

const ellipsisifiedWithCustomChars = ellipsisify('short string', 10, null, '…');
```

*ellipsis in a string*
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
