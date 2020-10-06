const initialState = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'INITIAL': {
      return initialState
    }
    case 'CREATE_NEW': {
      const newState = `you created '${action.data}'`
      return newState
    }
    case 'VOTE_ONE': {
      const newState = `you voted '${action.data.content}'`
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

export const createNewMessage = (anecdote) => {
  return {
    type: 'CREATE_NEW',
    data: anecdote,
  }
}

export const voteMessage = (anecdote) => {
  return {
    type: 'VOTE_ONE',
    data: anecdote,
  }
}

export const resetMessage = () => {
  return {
    type: 'RESET',
  }
}

export default reducer
