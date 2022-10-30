import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardsModule } from '../../cards/cards.module';
import { DecksController } from '../../decks/decks.controller';
import { DecksService } from '../../decks/decks.service';
import { DeckBuilder } from '../../decks/DeckBuilder';
import { DeckFormatter } from '../../decks/DeckFormatter';
import { DeckType } from '../../decks/enums/types.enum';
import { Deck } from '../../decks/deck.entity';
import { Card } from '../../cards/card.entity';
import { loadFixturesData } from '../helpers/load-fixtures-data';

const deckId = '521b0293-01f7-44c2-9990-27079eb2352d';

const mockDecksRepository = {
  save: (deck) => {
    return {
      ...deck,
      id: deckId,
    };
  },
};
const mockCardsRepository = {};

describe('DecksController', () => {
  let decksController: DecksController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        imports: [CardsModule],
        controllers: [DecksController],
        providers: [
          DecksService,
          DeckBuilder,
          DeckFormatter,
          {
            provide: getRepositoryToken(Deck),
            useValue: mockDecksRepository,
          },
          {
            provide: getRepositoryToken(Card),
            useValue: mockCardsRepository,
          },
        ],
      }).compile();

    decksController = moduleRef.get<DecksController>(DecksController);
  });

  describe('createDeck', () => {
    describe('for short not shuffled deck', () => {
      it('returns details about created deck', async () => {
        const output = await decksController.createDeck({
          type: DeckType.SHORT,
          shuffled: false,
        });
        const result = loadFixturesData('create-short-not-shuffled-deck');

        expect(output).toEqual(result);
      });
    });

    describe('for full not shuffled deck', () => {
      it('returns details about created deck', async () => {
        const output = await decksController.createDeck({
          type: DeckType.FULL,
          shuffled: false,
        });
        const result = loadFixturesData('create-full-not-shuffled-deck');

        expect(output).toEqual(result);
      });
    });
  });
});
