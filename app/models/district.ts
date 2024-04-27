import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Department from './department.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Town from './town.js'
import Neighborhood from './neighborhood.js'

export default class District extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare townId: number

  @belongsTo(() => Town)
  declare town: BelongsTo<typeof Town>

  @hasMany(() => Neighborhood)
  declare neighborhoods: HasMany<typeof Neighborhood>
}
