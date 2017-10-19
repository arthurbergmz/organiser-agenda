import path from 'path'
import DataStore from 'nedb'

const root = path.dirname(require.main.filename)

export default function (filename) {
  return new DataStore({
    filename: path.join(root, filename),
    autoload: true
  })
}
