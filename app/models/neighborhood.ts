import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import District from './district.js'

export default class Neighborhood extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare districtId: number

  @belongsTo(() => District)
  declare district: BelongsTo<typeof District>
}
