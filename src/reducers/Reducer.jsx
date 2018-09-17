export default function appReducer(state, action) {
  switch (action.type) {
    case 'GET_ROOMS':
      return (
        Object.assign({}, state, { roomList: action.roomList })
      );
    case 'SELECT_ROOM':
      return (
        Object.assign({}, state, { roomID: action.roomID })
      );
    case 'GET_TABLES':
      return (
        Object.assign({}, state, { tableList: action.tableList })
      );
    default:
      return state;
  }
}
