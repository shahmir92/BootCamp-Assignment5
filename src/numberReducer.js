eslint-disable-next-line
const numberReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
    }
  }

  export default numberReducer;