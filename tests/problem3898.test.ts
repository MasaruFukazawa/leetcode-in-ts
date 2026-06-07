import { expect, test } from 'vitest';
import { findDegrees } from '../src/problem3898.ts';

test('Sample', () => {
  expect(findDegrees([[0, 1, 1], [1, 0, 1], [1, 1, 0]])).toEqual([2, 2, 2]);
  expect(findDegrees([[0, 1, 0], [1, 0, 0], [0, 0, 0]])).toEqual([1, 1, 0]);
  expect(findDegrees([[0]])).toEqual([0]);
});
