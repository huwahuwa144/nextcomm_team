export const SELECT_ROOM = 'SELECT_ROOM';
export const GET_ROOMS = 'GET_ROOMS';

export const getRooms = (list) => {
  return {
    type: GET_ROOMS,
    roomList: list,
  };
};
