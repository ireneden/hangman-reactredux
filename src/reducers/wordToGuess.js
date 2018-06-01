import { NEW_GUESS } from '../actions/types'
import { showGuess } from '../lib/game'

const availableWords = ['fruit', 'codaisseur', 'cart', 'boomerang', 'ciaone', 'sleep', 'hangman', 'amsterdam']
let guesses = []
const word = availableWords[Math.floor(Math.random() * availableWords.length)]
const initialState = showGuess(word, guesses)

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_GUESS :
        guesses = guesses.concat(action.payload.guesses)
        const newState = showGuess(word, guesses)
        return newState
       

    default :
      return state

}
}