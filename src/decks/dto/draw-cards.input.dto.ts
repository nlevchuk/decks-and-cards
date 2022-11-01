import { IsNotEmpty, IsUUID } from 'class-validator';
import { missingDeckIdMessage, invalidUUIDMessage } from '../errors';

export class DrawCardsInputDto {
  @IsUUID('all', { message: invalidUUIDMessage })
  @IsNotEmpty({ message: missingDeckIdMessage })
  deckId: string;

  count: number;
}
