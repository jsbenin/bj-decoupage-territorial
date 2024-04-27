/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const DepartmentsController = () => import('#controllers/departments_controller')
const TownsController = () => import('#controllers/towns_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('departments', [DepartmentsController, 'index'])
    router.get('departments/:name/towns', [DepartmentsController, 'findTowns'])
    router.get('departments/:name/districts', [DepartmentsController, 'findDistricts'])
    router.get('departments/:name/neighborhoods', [DepartmentsController, 'findNeighborhoods'])

    router.get('towns', [TownsController, 'index'])
    router.get('towns/:name/districts', [TownsController, 'findDistricts'])
    router.get('towns/:name/neighborhoods', [TownsController, 'findNeighborhoods'])
  })
  .prefix('api')
