import { IsNotEmpty, IsUUID } from 'class-validator';
import { missingDeckIdMessage, invalidUUIDMessage } from '../errors';

export class OpenDeckInputDto {
  @IsUUID('all', { message: invalidUUIDMessage })
  @IsNotEmpty({ message: missingDeckIdMessage })
  deckId: string;
}
