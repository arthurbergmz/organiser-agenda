import { Server, GET, Response, Arguments, Path, Modules } from 'organiser'
import { NotesController } from './controllers/notes'
import { ContactsController } from './controllers/contacts'

const server = new Server({
  name: 'Agenda',
  internal: {
    debug: true
  }
})

server.modules(Modules.bodyParser())
server.routes(NotesController, ContactsController)
server.boot()
