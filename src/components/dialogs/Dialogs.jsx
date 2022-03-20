import React from 'react'
import styles from './Dialogs.module.css'
import Dialog from './dialog-item/Dialog';
import Message from './message/Message';
// import { userData } from '../..';
// import { messageData } from '../..';

export default function Dialogs(props) {
const dialogElements = props.userData.map((user) => <Dialog name={user.name} id={user.id} />);
const messageElements = props.messageData.map((data) => (
  <Message message={data.message} />
));

// Данный масив выводится в конструкции выше
// const dialogElements = [
//   <Dialog name={userData[0].name} id={userData[0].id} />,
//   <Dialog name={userData[1].name} id={userData[1].id} />,
//   <Dialog name={userData[2].name} id={userData[2].id} />,
//   <Dialog name={userData[3].name} id={userData[3].id} />,
//   <Dialog name={userData[4].name} id={userData[4].id} />,
//   <Dialog name={userData[5].name} id={userData[5].id} />,
// ];

  return (
    <div className={styles.dialogs}>
        <div className={styles.dialogItems}>
          {dialogElements}
        </div>
        <div className={styles.messages}>
          {messageElements}
        </div>
    </div>
  )
}
