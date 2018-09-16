import { connect } from 'react-redux';
import { firestore } from '../components/configs/firebase/config';
import RoomList from '../components/RoomList';
import { getRooms } from '../actions/RoomListActions';

const mapStateToProps = (state) => {
  return {
    roomList: state.roomList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoomList() {
      const temp = [];
      firestore.collection('rooms').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          temp.push({
            roomID: doc.id,
            name: doc.data().name,
          });
        });
        dispatch(getRooms(temp));
      });
    },
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomList);

export default AppContainer;
