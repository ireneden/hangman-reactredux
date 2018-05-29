import { CREATE_GAME } from './types'
import { NEW_GUESS } from './types'



export const createGame = (word) => {
  return {
    type: CREATE_GAME,
    payload: word
  }
}


export const newGuess = (guesses) => {
  return {
      type: NEW_GUESS,
      payload: guesses,
  }}

