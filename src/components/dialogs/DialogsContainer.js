import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageCreator } from '../../redux/message-reducer';
import { connect } from 'react-redux';
// import { userData } from '../..';
// import { messageData } from '../..';
let mapStateToProps = (state) => {
  return {
    dialogElements: state.messagePage.users,
    messageElements: state.messagePage.dialogs,
    newMessage: state.messagePage.newMessage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => {
      dispatch(addMessageActionCreator())
    },
    onHandleChange: (message) => {
      dispatch(updateNewMessageCreator(message))
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
