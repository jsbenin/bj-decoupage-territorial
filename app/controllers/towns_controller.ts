import Town from '#models/town'
import type { HttpContext } from '@adonisjs/core/http'

export default class TownsController {
  async index({ response }: HttpContext) {
    const towns = await Town.all()
    return response.status(200).json({
      towns,
    })
  }

  async findDistricts({ response, params }: HttpContext) {
    const town = await Town.findByOrFail('name', params.name.toUpperCase())
    await town.load('districts')
    return response.status(200).json({
      town: town?.name,
      districts: town.districts,
    })
  }

  async findNeighborhoods({ response, params }: HttpContext) {
    const town = await Town.findByOrFail('name', params.name.toUpperCase())
    await town.load('neighborhoods')
    return response.status(200).json({
      town: town?.name,
      neighborhoods: town.neighborhoods,
    })
  }
}
