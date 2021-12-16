import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMovies1639424745522 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',

        columns: [
          {
            name: 'id',

            type: 'uuid',

            isPrimary: true,
          },

          {
            name: 'name',

            type: 'varchar',

            isUnique: true,
          },

          {
            name: 'description',

            type: 'varchar',
          },

          {
            name: 'duration',

            type: 'numeric',
          },

          {
            name: 'category_id',

            type: 'uuid',
          },

          {
            name: 'created_at',

            type: 'timestamp',

            default: 'now()',
          },
        ],

        foreignKeys: [
          {
            name: 'FK_Movies_Category',

            columnNames: ['category_id'],

            referencedTableName: 'categories',

            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
