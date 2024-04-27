/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const DepartmentsController = () => import('#controllers/departments_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('departments', [DepartmentsController, 'index'])
    router.get('departments/:name/towns', [DepartmentsController, 'findTowns'])
    router.get('departments/:name/districts', [DepartmentsController, 'findDistricts'])
    router.get('departments/:name/neighborhoods', [DepartmentsController, 'findNeighborhoods'])
  })
  .prefix('api')
