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

const shortDeckOut = loadFixturesData('create-short-not-shuffled-deck.output');
const fullDeckOut = loadFixturesData('create-full-not-shuffled-deck.output');

const mockDecksRepository = {
  save: (deck) => {
    return {
      ...deck,
      id: shortDeckOut.deckId,
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

        expect(output).toEqual(shortDeckOut);
      });
    });

    describe('for full not shuffled deck', () => {
      it('returns details about created deck', async () => {
        const output = await decksController.createDeck({
          type: DeckType.FULL,
          shuffled: false,
        });

        expect(output).toEqual(fullDeckOut);
      });
    });
  });
});
