import type { Knex } from 'knex';

const MovementsAllowed = ['STOCK', 'IN', 'OUT'];

export async function up(knex: Knex): Promise<void> {
  await knex.raw(
    `CREATE TYPE "movements_allowed" AS ENUM (${MovementsAllowed.map(
      (el) => `'${el}'`
    ).join(',')})`
  );

  await knex.schema.createTable('movements', (table) => {
    table.increments('id').primary();
    table.integer('placeId').notNullable();
    table.integer('productId').notNullable();
    table.integer('quantity').notNullable();
    table.enum('type', MovementsAllowed).defaultTo('STOCK');
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  await knex.raw(
    `ALTER TABLE "movements"
    ADD CONSTRAINT "movements_placeId_fkey"
    FOREIGN KEY ("placeId")
    REFERENCES "places"("id");`
  );
  await knex.raw(
    `ALTER TABLE "movements"
    ADD CONSTRAINT "movements_productId_fkey"
    FOREIGN KEY ("productId")
    REFERENCES "products"("id");`
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('movements');
  await knex.raw(`DROP TYPE IF EXISTS "movements_allowed"`);
}
