const ellipsisify = require('../lib');

describe('ellipsisify', () => {
  it('should throws helpful error when no string is passed', () => {
    expect(() => ellipsisify(undefined, 1)).toThrow('Expected type of input to be `string` but received `undefined`');
  });
  it('should return the string when length is <= cutoff position', () => {
    expect(ellipsisify('hat', 10)).toEqual('hat');
  });
  it('should return the string when no cut off is passed', () => {
    expect(ellipsisify('medium string')).toEqual('medium string');
  });
  it('should add ellipsis after nth character', () => {
    const ellipsisified = ellipsisify('short string', 10);
    expect(ellipsisified).toEqual('short stri...');
    expect(ellipsisified.length).toEqual(13);
  });
  it('should cut off after nth character with provided ellipsis', () => {
    expect(ellipsisify('short string', 10, null, '…'))
      .toEqual('short stri…');
    expect(ellipsisify('short string', 10, null, '@@@'))
      .toEqual('short stri@@@');
  });
  it('should be able to add ellipsis in middle of a string', () => {
    expect(ellipsisify('longer string with ending', 10, 5))
      .toEqual('longer str...nding');
  });
  it('should not add ellipsis in middle of a string when string is short', () => {
    expect(ellipsisify('short', 10, 5))
      .toEqual('short');
  });
  it('should not add ellipsis in middle of a string when string to short to ellipse', () => {
    expect(ellipsisify('longer', 5, 5))
      .toEqual('longer');
  });
});
