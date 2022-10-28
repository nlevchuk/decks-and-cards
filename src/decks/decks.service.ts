import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeckInputDto } from './dto/create-deck.input.dto';
import { Deck } from './deck.entity';
import { DeckBuilder } from './DeckBuilder';

@Injectable()
export class DecksService {
  constructor(
    @InjectRepository(Deck)
    private deckRepository: Repository<Deck>,
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
}
