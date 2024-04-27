import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'neighborhoods'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.integer('district_id')
      table.foreign('district_id').references('id').inTable('districts')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
