import { NEW_GUESS } from '../actions/types'

export default (state = 10, action) => {
  switch (action.type) {
    case NEW_GUESS :
        state -= 1
        if (state === 0) return 'ZERO'
        return state


    default :
      return state

}
}