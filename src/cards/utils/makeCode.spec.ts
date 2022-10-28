import { makeCode } from './makeCode';
import { CardValue } from '../enums/values.enum';
import { CardSuit } from '../enums/suits.enum';

describe('makeCode', () => {
  describe('for court cards', () => {
    it('returns first letters for both value and suit', () => {
      expect(
        makeCode(CardValue.ACE, CardSuit.HEARTS)
      ).toEqual('AH');

      expect(
        makeCode(CardValue.JACK, CardSuit.CLUBS)
      ).toEqual('JC');
    });
  });

  describe('for pip cards', () => {
    it('returns entire value and first letter of suit', () => {
      expect(
        makeCode(CardValue.TEN, CardSuit.DIAMONDS)
      ).toEqual('10D');

      expect(
        makeCode(CardValue.FIVE, CardSuit.SPADES)
      ).toEqual('5S');
    });
  });
});
