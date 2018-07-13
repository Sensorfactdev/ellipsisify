const ellipsisify = require('../lib');

describe('ellipsisify', () => {
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
});
