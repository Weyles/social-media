import React from 'react'
import styles from './Dialogs.module.css'
import Dialog from './dialog-item/Dialog';
import Message from './message/Message';
// import { userData } from '../..';
// import { messageData } from '../..';

export default function Dialogs(props) {
  const dialogElements = props.state.users.map((user) => <Dialog avatar={user.avatar} name={user.name} id={user.id} />);
  const messageElements = props.state.dialogs.map((data) => (
  <Message message={data.message} />
  ));

  let newMessage = React.createRef();
  // let message = newMessage.current.value;


  /*В атрибуте onChange находится такая же функция, ее суть принимать функцию из state и вводить в нее нужные данные
  основной функционал находится в state тут всего лишь идет передача данных, потому функцию можно уместить в одну строку
  Вжно заметить как функция переносится внутрь атрибута под предлогом второй функции*/
  
  let addMessage = () => {
    props.addMessage();
    props.updateNewMessageText("");
  }

function handleChange() {
  props.updateNewMessageText(newMessage.current.value);
}

  return (
    <div className={styles.dialogs}>
        <div className={styles.dialogItems}>
          {dialogElements}
        </div>
        <div className={styles.messages}>
          <div>
            <textarea onChange={handleChange} value={props.state.newMessage} ref={newMessage} /> <button onClick={addMessage}>Enter</button>
          </div>
          {messageElements}
        </div>
    </div>
  )
}
