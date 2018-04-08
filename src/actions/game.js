import { CREATE_GAME } from './types'
import { pickRandomWord } from '../lib/game'


export const createGame = () => {
  const word = pickRandomWord(['fruit', 'codaisseur', 'cart', 'boomerang', 'ciaone', 'sleep'])
  return {
    type: CREATE_GAME,
    payload: word
  }
}
