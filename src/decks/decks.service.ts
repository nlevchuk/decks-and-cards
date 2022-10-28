import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeckInputDto } from './dto/create-deck.input.dto';
import { DrawCardsInputDto } from './dto/draw-cards.input.dto';
import { Deck } from './deck.entity';
import { Card } from '../cards/card.entity';
import { DeckBuilder } from './DeckBuilder';

@Injectable()
export class DecksService {
  constructor(
    @InjectRepository(Deck)
    private deckRepository: Repository<Deck>,
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    private deckBuilder: DeckBuilder,
  ) {}

  async create({ type, shuffled }: CreateDeckInputDto): Promise<Deck> {
    const deck = this.deckBuilder.build(type, shuffled);

    return this.deckRepository.save(deck);
  }

  async open(deckId): Promise<Deck> {
    return this.deckRepository.findOne({
      where: { id: deckId },
      relations: { cards: true },
      order: {
        cards: {
          order: 'ASC',
        },
      },
    });
  }

  async drawCards({ deckId, count }: DrawCardsInputDto): Promise<Card[]> {
    const cards = await this.cardRepository.find({
      where: { deckId },
      order: {
        order: 'ASC',
      },
      take: count,
    });

    await this.cardRepository.remove(cards);

    return cards;
  }
}
