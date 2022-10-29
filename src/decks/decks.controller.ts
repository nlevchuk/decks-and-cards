import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DecksService } from './decks.service';
import { DeckFormatter } from './DeckFormatter';
import { OpenDeckInputDto } from './dto/open-deck.input.dto';
import { CreateDeckInputDto } from './dto/create-deck.input.dto';
import { CreateDeckOutputDto } from './dto/create-deck.output.dto';
import { OpenDeckOutputDto } from './dto/open-deck.output.dto';
import { DrawCardsInputDto } from './dto/draw-cards.input.dto';
import { DrawCardsOutputDto } from './dto/draw-cards.output.dto';

@Controller('decks')
export class DecksController {
  constructor(
    private readonly decksService: DecksService,
    private deckFormatter: DeckFormatter,
  ) {}

  @Get('open')
  @UsePipes(new ValidationPipe({
    stopAtFirstError: true,
  }))
  async openDeck(
    @Query() { deckId }: OpenDeckInputDto,
  ): Promise<OpenDeckOutputDto> {
    const deck = await this.decksService.open(deckId);

    return this.deckFormatter.formatOpenedDeck(deck);
  }

  @Post('create')
  async createDeck(
    @Body() createDeckDto: CreateDeckInputDto,
  ): Promise<CreateDeckOutputDto> {
    const deck = await this.decksService.create(createDeckDto);

    return this.deckFormatter.formatCreatedDeck(deck);
  }

  @Put('draw-cards')
  @UsePipes(new ValidationPipe({
    stopAtFirstError: true,
  }))
  async drawCards(
    @Body() drawCardsDto: DrawCardsInputDto,
  ): Promise<DrawCardsOutputDto> {
    const cards = await this.decksService.drawCards(drawCardsDto);

    return this.deckFormatter.formatDrawnCards(cards);
  }
}
