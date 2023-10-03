import {describe, expect, test} from '@jest/globals';
import { liida, korruta } from './funktsioonid';

describe('liida funktsioon', () => {
  test('lisab 1 + 2 niiviisi, et see on 3', () => {
    expect(liida(1, 2)).toBe(3);
  });
});

describe('korruta funktsioon', () => {
  test('korrutab 2 * 3 niiviisi, et see on 6', () => {
    expect(korruta(2, 3)).toBe(6);
  });
  test('Korrutades 2 * NaN saame NaN', () => {
    expect(korruta(2, NaN)).toBeNaN();
  });
});