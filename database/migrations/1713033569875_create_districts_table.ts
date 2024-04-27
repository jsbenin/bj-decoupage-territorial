import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'districts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.integer('town_id')
      table.foreign('town_id').references('id').inTable('towns')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

