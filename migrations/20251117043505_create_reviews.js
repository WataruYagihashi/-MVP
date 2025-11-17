/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("id").primary();
    table
      .integer("movie_id")
      .unsigned() //正数
      .references("id")
      .inTable("movies") //moviesのid紐付けてます
      .onDelete("CASCADE"); //紐づく映画が消されたらこのレビューも削除されますよ
    table.integer("rating").notNullable;
    table.text("comment");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reviews");
};
