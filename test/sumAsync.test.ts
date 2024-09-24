import {
  describe,
  expect,
  test,
} from '@jest/globals';

import sum from '../src/utils/sumAsync';

describe('Test sumAsync module:', () => {
  test('adds 1 + 2 to equal 3', () => {
    return sum(1,2).then(res=> {
      expect(res).toBe(3)
    })
  });
});