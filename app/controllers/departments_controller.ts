import Department from '#models/department'
import District from '#models/district'
import Neighborhood from '#models/neighborhood'
import Town from '#models/town'
import type { HttpContext } from '@adonisjs/core/http'

export default class DepartmentsController {
  async index({ response }: HttpContext) {
    const departments = await Department.all()
    return response.status(200).json({
      departments,
    })
  }

  async findTowns({ response, params }: HttpContext) {
    const department = await Department.findByOrFail('name', params.name.toUpperCase())
    await department.load('towns')
    return response.status(200).json({
      department: department?.name,
      towns: department.towns,
    })
  }

  async findDistricts({ response, params }: HttpContext) {
    const department = await Department.findByOrFail('name', params.name.toUpperCase())
    await department.load('districts')
    return response.status(200).json({
      department: department?.name,
      districts: department?.districts,
    })
  }

  async findNeighborhoods({ response, params }: HttpContext) {
    const department = await Department.findByOrFail('name', params.name.toUpperCase())
    const neighborhoods = await Neighborhood.query().whereHas('district', (query) => {
      query.whereHas('town', (q) => {
        q.where('department_id', department.id)
      })
    })
    return response.status(200).json({
      department: department?.name,
      neighborhoods: neighborhoods,
    })
  }
}
