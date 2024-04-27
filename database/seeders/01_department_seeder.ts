import Department from '#models/department'
import { Database } from '@adonisjs/lucid/database'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Department.updateOrCreateMany('id', [
      { id: 1, name: 'ALIBORI' },
      { id: 2, name: 'ATACORA' },
      { id: 3, name: 'ATLANTIQUE' },
      { id: 4, name: 'BORGOU' },
      { id: 5, name: 'COLLINES' },
      { id: 6, name: 'COUFFO' },
      { id: 7, name: 'DONGA' },
      { id: 8, name: 'LITTORAL' },
      { id: 9, name: 'MONO' },
      { id: 10, name: 'OUEME' },
      { id: 11, name: 'PLATEAU' },
      { id: 12, name: 'ZOU' },
    ])
  }
}

