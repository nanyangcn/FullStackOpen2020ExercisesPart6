import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE': {
      const newState = [...state, action.data]
      return newState
    }
    case 'VOTE': {
      const anecdote = state.find((item) => item.id === action.data.id)
      anecdote.votes += 1
      const newState = state.map((item) =>
        item.id === action.data.id ? anecdote : item
      )
      return newState
    }
    case 'INITIALIZE': {
      const newState = [...action.data]
      return newState
    }
    default: {
      return state
    }
  }
}

export const votePlusOne = (anecdote) => {
  return async (dispatch) => {
    dispatch({
      type: 'VOTE',
      data: anecdote,
    })
    await anecdoteService.update(anecdote)
  }
}

export const createNewAnecdote = (anecdoteContent) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(anecdoteContent)
    dispatch({
      type: 'CREATE',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INITIALIZE',
      data: anecdotes,
    })
  }
}

export default reducer
