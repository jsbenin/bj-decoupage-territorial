import { BaseModel, belongsTo, column, hasMany, hasManyThrough } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, HasManyThrough } from '@adonisjs/lucid/types/relations'
import District from './district.js'
import Neighborhood from './neighborhood.js'
import Department from './department.js'

export default class Town extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare departmentId: number

  @belongsTo(() => Department)
  declare department: BelongsTo<typeof Department>

  @hasMany(() => District)
  declare districts: HasMany<typeof District>

  @hasManyThrough([() => Neighborhood, () => District])
  declare neighborhoods: HasManyThrough<typeof Neighborhood>
}
