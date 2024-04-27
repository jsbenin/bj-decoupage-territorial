import Neighborhood from '#models/neighborhood'
import type { HttpContext } from '@adonisjs/core/http'

export default class NeighborhoodsController {
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)

    let neighborhoods = await Neighborhood.query().paginate(page, limit)
    return response.status(200).json({
      neighborhoods,
    })
  }
}
