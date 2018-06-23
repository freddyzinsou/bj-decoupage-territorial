'use strict'

const Schema = use('Schema')

class NeighborhoodSchema extends Schema {
  up () {
    this.create('neighborhoods', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.integer('neighborhood_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('neighborhoods')
  }
}

module.exports = NeighborhoodSchema
