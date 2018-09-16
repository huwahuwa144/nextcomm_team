
const initialState = {
  tasks: [],
  text: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETUSERTASK': {
      return (
        Object.assign({}, state, {
          value: action.value,
        })
      );
    }
    default: {
      return state;
    }
  }
};

export default reducer;
