import {
  describe,
  expect,
  test,
} from '@jest/globals';

import sub from '../src/utils/sub';

describe('Test sub module:', () => {
  test('adds 4 - 2  to equal 2', () => {
    expect(sub(4, 2)).toBe(2);
  });

  test('adds 3 - 1 to equal 2', () => {
    expect(sub(3, 1)).toBe(2);
  });
});