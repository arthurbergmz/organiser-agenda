import { Arguments, Path, POST, GET, PUT, DELETE, Types, Response } from 'organiser'
import { NotesService } from '../services/NotesService'
import Note from '../models/Note'

@Arguments(NotesService)
@Path('notes')
export class NotesController {
  constructor (service) {
    this.service = service
  }

  @POST
  @Arguments({
    note: Note
  })
  async create ({ note }) {
    return Response.ok(await this.service.save(note)).build()
  }

  @GET
  async read () {
    return Response.ok(await this.service.getAll()).build()
  }

  @GET
  @Path('{id}')
  @Arguments({
    id: Types.STRING
  })
  async readById ({ id }) {
    const response = await this.service.getById(id)
    return response ? Response.ok(response).build() : Response.noContent().build()
  }

  @PUT
  @Path('{id}')
  @Arguments({
    id: Types.STRING,
    note: Note
  })
  async update ({ id, note }) {
    return Response.ok(await this.service.update(id, note)).build()
  }

  @DELETE
  @Path('{id}')
  @Arguments({
    id: Types.STRING
  })
  async delete ({ id }) {
    const response = await this.service.delete(id)
    return response ? Response.ok().build() : Response.noContent().build()
  }
}
