import { connect } from 'react-redux';
import { firestore } from '../components/configs/firebase/config';
import Room from '../components/Room';
import { getTables } from '../actions/RoomAction';

const mapStateToProps = (state) => {
  return {
    roomID: state.roomID,
    tableID: state.tableID,
    tableList: state.tableList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTables(roomid) {
      const temp = [];
      if (roomid !== null) {
        firestore.collection('rooms').doc(roomid).collection('tables').get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              temp.push({
                tableID: doc.id,
                name: doc.data().name,
              });
            });
            dispatch(getTables(temp));
          });
      }
    },
  };
};

const RoomContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Room);

export default RoomContainer;
