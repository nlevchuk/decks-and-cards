import { CardValue } from '../../cards/enums/values.enum';

export interface DeckBase {
  getAvailableValues(): CardValue[];
}
