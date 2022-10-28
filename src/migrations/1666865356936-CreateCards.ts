import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class CreateCards1666865356936 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cards',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid()',
          },
          {
            name: 'deckId',
            type: 'uuid',
          },
          {
            name: 'value',
            type: 'varchar',
            length: '5',
          },
          {
            name: 'suit',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'order',
            type: 'int2',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: 'deckId',
            columnNames: ['deckId'],
            referencedTableName: 'decks',
            referencedColumnNames: ['id'],
            onUpdate: 'cascade',
            onDelete: 'cascade',
          }),
        ],
        indices: [
          new TableIndex({
            name: 'IDX_CARDS_DECKID',
            columnNames: ['deckId'],
          }),
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cards');
  }
}
