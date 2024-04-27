import District from '#models/district'
import type { HttpContext } from '@adonisjs/core/http'

export default class DistrictsController {
  async index({ response }: HttpContext) {
    const districts = await District.all()
    return response.status(200).json({
      districts,
    })
  }

  async findNeighborhoods({ response, params }: HttpContext) {
    const district = await District.findByOrFail('name', params.name.toUpperCase())
    await district.load('neighborhoods')
    return response.status(200).json({
      district: district?.name,
      neighborhoods: district.neighborhoods,
    })
  }
}
