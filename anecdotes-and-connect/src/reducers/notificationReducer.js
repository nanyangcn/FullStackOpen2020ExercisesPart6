const initialState = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

let timeoutId = null

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'INITIAL': {
      return initialState
    }
    case 'SET_NOTIFICATION': {
      const newState = action.data
      return newState
    }
    case 'RESET': {
      return null
    }
    default: {
      return state
    }
  }
}

export const showInitialState = () => {
  return {
    type: 'INITIAL',
  }
}

export const setNotification = (message, sec) => {
  return async (dispatch) => {
    clearTimeout(timeoutId)
    dispatch({
      type: 'SET_NOTIFICATION',
      data: message,
    })
    timeoutId = setTimeout(() => dispatch({ type: 'RESET' }), 1000 * sec)
  }
}

export default reducer
