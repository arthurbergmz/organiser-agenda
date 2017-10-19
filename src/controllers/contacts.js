import { Arguments, Path, POST, GET, PUT, DELETE, Types, Response } from 'organiser'
import { ContactsService } from '../services/ContactsService'
import Contact from '../models/Contact'

@Arguments(ContactsService)
@Path('contacts')
export class ContactsController {
  constructor (service) {
    this.service = service
  }

  @POST
  @Arguments({
    contact: Contact
  })
  async create ({ contact }) {
    return Response.ok(await this.service.save(contact)).build()
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
    contact: Contact
  })
  async update ({ id, contact }) {
    return Response.ok(await this.service.update(id, contact)).build()
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
