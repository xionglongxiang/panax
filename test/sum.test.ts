import {
  describe,
  expect,
  test,
} from '@jest/globals';

import sum from '../src/utils/sum';

describe('Test sum module:', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 1 + 3 to equal 4', () => {
    expect(sum(1, 3)).toBe(4);
  });
});