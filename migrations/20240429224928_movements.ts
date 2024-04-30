import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('movements', (table) => {
    table.increments('id').primary();
    table.integer('place_id').notNullable();
    table.integer('product_id').notNullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  await knex.raw(
    `ALTER TABLE "movements"
    ADD CONSTRAINT "movements_placeId_fkey"
    FOREIGN KEY ("place_id")
    REFERENCES "places"("id");`
  );
  await knex.raw(
    `ALTER TABLE "movements"
    ADD CONSTRAINT "movements_productId_fkey"
    FOREIGN KEY ("product_id")
    REFERENCES "products"("id");`
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('movements');
}
