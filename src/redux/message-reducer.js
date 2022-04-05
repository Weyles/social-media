const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
      {
        id: 1,
        message: "Wow, wow wow!!!"
      },
      {
        id: 2,
        message: "It's cool"
      },
      {
        id: 3,
        message: "Owsome!"
      },
      {
        id: 4,
        message: "Hi Vanya"
      },
      {
        id: 5,
        message: "Hola guys"
      },
      {
        id: 6,
        message: "Imposible!"
      },
  ],
  users: [
    {
      id: 1,
      name: "Dima",
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF3CYnR_0RjKeoiPaNKcBQJ8g4jr9MjXTQVIb_9Jkvmx2gOBAa50yI44W4d250zu_9EM&usqp=CAU',
    },
    {
      id: 2,
      name: "Vanya",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR645lC0rJoigXyHYS3bmC35AzNBBvuNzjOS1vaNGW7ZvRRFzZ9QoMEOkWL35JR4RiKtag&usqp=CAU",
    },
    {
      id: 3,
      name: "Sasha",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsNJDa6-XuAiczmfF56cjgJJ8p1Y3W_57n7PlDSJ7Asjx6JhYsmWUkqnwkI5NDRmkRrc&usqp=CAU",
    },
    {
      id: 4,
      name: "Victoria",
      avatar: "https://i.pinimg.com/736x/5c/c8/e4/5cc8e4b793c1b1a35462b569fa96e7db.jpg",
    },
    {
      id: 5,
      name: "Danya",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxja3SWqS4CFSfSuEQ_04g5cm95rytZ9uAvAUFCI9XHNlK0qrBB4d9EPjozuHi_HdJ9w&usqp=CAU",
    },
    {
      id: 6,
      name: "Nikita",
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF3CYnR_0RjKeoiPaNKcBQJ8g4jr9MjXTQVIb_9Jkvmx2gOBAa50yI44W4d250zu_9EM&usqp=CAU',
    },
  ],
  newMessage: "test",
};

export default function messageReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
              id: 5,
              message: state.newMessage,
            }
            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            stateCopy.dialogs.push(newMessage);
            stateCopy.newMessage = "";
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.newMessageText;
            return stateCopy;
          } 
        default:
            return state;
    }
}

export let addMessageActionCreator = () => {
    return (
      {
        type: ADD_MESSAGE,
      }
    );
  }
  
  export let updateNewMessageCreator = (message) => {
    return (
      {
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newMessageText: message,
      }
    );
  }
