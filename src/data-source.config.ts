import { DataSourceOptions } from 'typeorm';
import { Deck } from './decks/deck.entity';
import { Card } from './cards/card.entity';

export default (): DataSourceOptions => {
  switch (process.env.NODE_ENV) {
    case 'development':
    case 'production':
      return {
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        migrations: [`${__dirname}/migrations/*.ts`],
        entities: [Deck, Card],
      }
    default:
      return {
        type: 'sqlite',
        database: ':memory:',
        migrations: [`${__dirname}/migrations/*.ts`],
        entities: [Deck, Card],
      };
  }
};
