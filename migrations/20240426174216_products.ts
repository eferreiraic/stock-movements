import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').nullable();
    table.integer('quantityPerPack').nullable();
    table.integer('quantityPacks').notNullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products');
}
