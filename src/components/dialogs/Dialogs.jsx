import React from 'react'
import styles from './Dialogs.module.css'
import Dialog from './dialog-item/Dialog';
import Message from './message/Message';
// import { userData } from '../..';
// import { messageData } from '../..';

export default function Dialogs(props) {
  const dialogElements = props.dialogElements.map((user) => <Dialog avatar={user.avatar} name={user.name} id={user.id} />);
  const messageElements = props.messageElements.map((data) => (
  <Message message={data.message} avatar={data.avatar} id={data.id}/>
  ));

  // let newMessage = React.createRef();

  /*В атрибуте onChange находится такая же функция, ее суть принимать функцию из state и вводить в нее нужные данные
  основной функционал находится в state тут всего лишь идет передача данных, потому функцию можно уместить в одну строку
  Вжно заметить как функция переносится внутрь атрибута под предлогом второй функции*/
  
  let addMessage = () => {
    // props.addMessage();
    // props.updateNewMessageText("");
    props.onAddMessage();
  }

function handleChange(e) { 
  let message = e.target.value;
  // props.updateNewMessageText(newMessage.current.value);
  props.onHandleChange(message);
}

  return (
    <div className={styles.dialogs}>
        <div className={styles.dialogItems}>
          {dialogElements}
        </div>
        <div className={styles.messagesContainer}>
          <div className={styles.messages}>
            {messageElements}
          </div>
          <div className={styles.area}>
            <textarea 
              className={styles.textarea}
              onChange={handleChange} 
              value={props.newMessage} 
              placeholder="Enter your message" 
            /> 
            <button className={styles.button} onClick={addMessage}>Enter</button>
          </div>
        </div>
    </div>
  )
}
