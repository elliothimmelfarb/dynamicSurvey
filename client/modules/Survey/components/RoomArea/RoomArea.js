import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectRoom } from '../../SurveyActions';
import RoomPage from '../RoomPage/RoomPage';

class RoomArea extends Component {
  render() {
    const {
      selectRoomAction,
      rooms,
      selectedRoom
    } = this.props;
    const roomList = Object.keys(rooms).map((room, index) => {
      return (
        <div
          style={{ display: 'inline-block' }}
          onClick={() => selectRoomAction(room)}
          key={index}
        >
          {room}
        </div>
      );
    });
    const room = <RoomPage room={rooms[selectedRoom]} />; // TODO: MAKE ROOM COMPONENT
    return (
      <div>
        {roomList}
      </div>
    );
  }
}

RoomArea.propTypes = {
  rooms: PropTypes.object.isRequired,
  selectRoomAction: PropTypes.func.isRequired,
  selectedRoom: PropTypes.object,
};

const mapStateToProps = (state) => ({
  rooms: state.survey.rooms,
  selectedRoom: state.survey.selectedRoom,
});

const mapDispatchToProps = dispatch => ({
  selectRoomAction: roomName => dispatch(selectRoom(roomName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomArea);
