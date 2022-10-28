import { Injectable } from '@nestjs/common';
import { Card } from './card.entity';
import { makeCode } from './utils';

@Injectable()
export class CardFormatter {
  format({ value, suit }: Card): object {
    return {
      value,
      suit,
      code: makeCode(value, suit),
    };
  }
}
