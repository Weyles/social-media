import React from 'react'
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageCreator } from '../../redux/message-reducer';
// import { userData } from '../..';
// import { messageData } from '../..';

export default function DialogsComponents(props) {
  let state = props.store.getState();
  // let newMessage = React.createRef();

  /*В атрибуте onChange находится такая же функция, ее суть принимать функцию из state и вводить в нее нужные данные
  основной функционал находится в state тут всего лишь идет передача данных, потому функцию можно уместить в одну строку
  Вжно заметить как функция переносится внутрь атрибута под предлогом второй функции*/
  
  let addMessage = () => {
    // props.addMessage();
    // props.updateNewMessageText("");
    props.store.dispatch(addMessageActionCreator());
  }

function handleChange(message) { 
  // props.updateNewMessageText(newMessage.current.value);
  props.store.dispatch(updateNewMessageCreator(message));
}
  return (
    <Dialogs 
      onAddMessage={addMessage}
      onHandleChange={handleChange}
      dialogElements={state.messagePage.users}
      messageElements={state.messagePage.dialogs}
      newMessage={state.messagePage.newMessage}
    />
  )
}
