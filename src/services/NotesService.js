import { Arguments } from 'organiser'
import createDatabase from '../database'

@Arguments(createDatabase('notes.db'))
export class NotesService {
  constructor (databaseInstance) {
    this.db = databaseInstance
  }

  getAll () {
    return new Promise((resolve, reject) => {
      this.db.find({}, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  getById (id) {
    return new Promise((resolve, reject) => {
      this.db.findOne({ _id: id }, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  update (id, model) {
    model._id = id
    return new Promise((resolve, reject) => {
      this.db.update({ _id: id }, { $set: model }, {}, (err, amount, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  save (model) {
    return new Promise((resolve, reject) => {
      this.db.insert(model, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      this.db.remove({ _id: id }, {}, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }
}
