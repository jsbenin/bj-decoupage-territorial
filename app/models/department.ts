import { BaseModel, column, hasMany, hasManyThrough } from '@adonisjs/lucid/orm'
import District from './district.js'
import type { HasMany, HasManyThrough } from '@adonisjs/lucid/types/relations'
import Town from './town.js'
import Neighborhood from './neighborhood.js'

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @hasMany(() => Town)
  declare towns: HasMany<typeof Town>

  @hasManyThrough([() => District, () => Town])
  declare districts: HasManyThrough<typeof District>

  @hasManyThrough([() => Neighborhood, () => District])
  declare neighborhoods: HasManyThrough<typeof Neighborhood>
}
