import { Controller, Get, Post, Put, Body, Query } from '@nestjs/common';
import { DecksService } from './decks.service';
import { DeckFormatter } from './DeckFormatter';
import { CreateDeckDto } from './dto/create-deck.dto';

@Controller('decks')
export class DecksController {
  constructor(
    private readonly decksService: DecksService,
    private deckFormatter: DeckFormatter,
  ) {}

  @Get('open')
  async openDeck(@Query('deckId') deckId: string): Promise<{}> {
    const deck = await this.decksService.open(deckId);

    return this.deckFormatter.formatOpenedDeck(deck);
  }

  @Post('create')
  async createDeck(@Body() createDeckDto: CreateDeckDto): Promise<{}> {
    const deck = await this.decksService.create(createDeckDto);

    return this.deckFormatter.formatCreatedDeck(deck);
  }
}
