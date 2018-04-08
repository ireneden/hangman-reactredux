import { CREATE_GAME } from './types'
import { pickRandomWord } from '../lib/game'


export const createGame = () => {
  const word = pickRandomWord(['blink182', 'LakeStreetDive', 'EdSheeran'])
  return {
    type: CREATE_GAME,
    payload: word
  }
}
