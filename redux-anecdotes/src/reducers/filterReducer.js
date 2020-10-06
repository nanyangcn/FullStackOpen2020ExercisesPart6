const reducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER': {
      const newState = action.data
      return newState
    }
    default: {
      return state
    }
  }
}

export const filterAction = (anecdote) => {
  return {
    type: 'FILTER',
    data: anecdote,
  }
}

export default reducer
