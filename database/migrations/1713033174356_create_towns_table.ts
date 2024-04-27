import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'towns'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.integer('department_id')
      table.foreign('department_id').references('id').inTable('departments')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
