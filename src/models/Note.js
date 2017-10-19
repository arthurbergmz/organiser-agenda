import { Types } from 'organiser'

export default function Note () {
  return {
    _id: {
      type: Types.STRING,
      optional: true
    },
    description: Types.STRING,
    done: {
      type: Types.BOOLEAN,
      defaultValue: false
    }
  }
}
