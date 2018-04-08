import { CREATE_GAME } from '../actions/types'

const words = []

export default (state = words, { type, payload } = {}) => {
  switch (type) {
    case CREATE_GAME :
      return [].concat(payload)
    default :
      return state
  }
}
