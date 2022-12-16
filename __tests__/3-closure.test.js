const {
  makeStringDivider,
  makeIteratorFunc,
  rememberMe
} = require('../sections/3-closure.js');

describe('makeStringDivider()', () => {
  test('will return a new function', () => {
    const splitStringInto5s = makeStringDivider(5);
    expect(typeof splitStringInto5s).toBe('function');
  });
  test('new function returns empty array when passed empty string', () => {
    const splitStringInto5s = makeStringDivider(5);
    expect(splitStringInto5s('')).toEqual([]);
  });
  test('when new function is passed string of length equal to value passed to original function, return array containing 1 string', () => {
    const splitStringInto5s = makeStringDivider(5);
    expect(splitStringInto5s('hello')).toEqual(['hello']);

    const splitStringInto7s = makeStringDivider(7);
    expect(splitStringInto7s('goodbye')).toEqual(['goodbye']);
  });
  test('when new function is given string of length greater than value passed to original function, return array of substrings', () => {
    const splitStringInto4s = makeStringDivider(4);
    expect(splitStringInto4s('programs')).toEqual(['prog', 'rams']);
    expect(splitStringInto4s('the quick, brown fox')).toEqual([
      'the ',
      'quic',
      'k, b',
      'rown',
      ' fox'
    ]);
  });
  test('when new function is given string that does not divide evenly, the final substring in the returned array is shorter', () => {
    const splitStringInto4s = makeStringDivider(4);
    expect(splitStringInto4s('hello')).toEqual(['hell', 'o']);
    expect(splitStringInto4s('goodbye')).toEqual(['good', 'bye']);
  });
});

describe('makeIteratorFunc()', () => {
  test('returns a new function', () => {
    const iterativeFunc = makeIteratorFunc();
    expect(typeof iterativeFunc).toBe('function');
  });
  test('new function returns result of calling passed iteratee with first array element', () => {
    function doubleNum(num) {
      return num * 2;
    }
    const nums = [7, 11, 13];
    const doubleIterator = makeIteratorFunc(nums, doubleNum);
    expect(doubleIterator()).toBe(14);
  });
  test('new function returns results of calling passed iteratee with every array element in order', () => {
    function shoutString(str) {
      return str.toUpperCase();
    }
    const words = ['local', 'execution', 'context'];
    const shoutIterator = makeIteratorFunc(words, shoutString);
    expect(shoutIterator()).toBe('LOCAL');
    expect(shoutIterator()).toBe('EXECUTION');
    expect(shoutIterator()).toBe('CONTEXT');
  });
  test('new function returns undefined when number of calls exceeds number of items in given array', () => {
    function shoutString(str) {
      return str.toUpperCase();
    }
    const words = ['local', 'execution', 'context'];
    const shoutIterator = makeIteratorFunc(words, shoutString);
    shoutIterator();
    shoutIterator();
    shoutIterator();
    expect(shoutIterator()).toBe(undefined);
  });
});
