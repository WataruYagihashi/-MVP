/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id").primary();
    table.integer("tmdb_id").notNullable;
    table.string("title").notNullable;
    table.string("poster_path");
    table.string("release_date"); //映画の公開日
    table.text("overview"); //映画の概要
    table.timestamps(true, false); //created_at と updated_atを自動生成
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("movies");
};
