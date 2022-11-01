import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getRepositoryToken, getDataSourceToken } from '@nestjs/typeorm';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { Deck } from '../decks/deck.entity';
import { Card } from '../cards/card.entity';
import { missingDeckIdMessage, invalidUUIDMessage } from '../decks/errors';
import { loadFixturesData } from './helpers/load-fixtures-data';

const openedDeckIn = loadFixturesData('open-deck.input');
const openedDeckOut = loadFixturesData('open-deck.output');
const drawnCardsIn = loadFixturesData('draw-cards.input');
const drawnCardsOut = loadFixturesData('draw-cards.output');

const mockDecksRepository = ({
  findOne: () => openedDeckIn,
});
const mockCardsRepository = {
  find: () => drawnCardsIn,
  remove: () => {},
};

describe('DecksController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(getRepositoryToken(Deck))
      .useValue(mockDecksRepository)
      .overrideProvider(getRepositoryToken(Card))
      .useValue(mockCardsRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('GET /decks/open', () => {
    describe('when no deckId parameter', () => {
      it('returns an error', async () => {
        const response = await request(app.getHttpServer()).get('/decks/open');

        expect(response.status).toEqual(400);
        expect(response.body.message).toEqual([missingDeckIdMessage]);
      });
    });

    describe('when deckId parameter is not a valid UUID', () => {
      it('returns an error', async () => {
        const response = await request(app.getHttpServer())
          .get('/decks/open?deckId=1234567890');

        expect(response.status).toEqual(400);
        expect(response.body.message).toEqual([invalidUUIDMessage]);
      });
    });

    it('returns a deck', async () => {
      const response = await request(app.getHttpServer())
        .get(`/decks/open?deckId=${openedDeckIn.id}`);

      expect(response.status).toEqual(200);
      expect(response.body).toEqual(openedDeckOut);
    });
  });

  describe('PUT /decks/draw-cards', () => {
    describe('when no deckId parameter', () => {
      it('returns an error', async () => {
        const response = await request(app.getHttpServer())
          .put('/decks/draw-cards');

        expect(response.status).toEqual(400);
        expect(response.body.message).toEqual([missingDeckIdMessage]);
      });
    });

    describe('when deckId parameter is not a valid UUID', () => {
      it('returns an error', async () => {
        const response = await request(app.getHttpServer())
          .put('/decks/draw-cards')
          .send({ deckId: '1234567890' });

        expect(response.status).toEqual(400);
        expect(response.body.message).toEqual([invalidUUIDMessage]);
      });
    });

    it('returns 3 cards from the top of a deck', async () => {
      const response = await request(app.getHttpServer())
        .put(`/decks/draw-cards`)
        .send({
          deckId: openedDeckIn.id,
          count: 3,
        });

      expect(response.status).toEqual(200);
      expect(response.body).toEqual(drawnCardsOut);
    });
  });
});
