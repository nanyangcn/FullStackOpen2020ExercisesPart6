const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD': {
      const newState = {
        ...state,
        good: state.good + 1,
      }
      return newState
    }
    case 'OK': {
      const newState = {
        ...state,
        ok: state.ok + 1,
      }
      return newState
    }
    case 'BAD': {
      const newState = {
        ...state,
        bad: state.bad + 1,
      }
      return newState
    }
    case 'ZERO': {
      const newState = { ...initialState }
      return newState
    }
    default:
      return state
  }
}

export default counterReducer
