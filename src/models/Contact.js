import { Types } from 'organiser'

export default function Contact () {
  return {
    _id: {
      type: Types.STRING,
      optional: true
    },
    name: Types.STRING,
    email: Types.STRING
  }
}
