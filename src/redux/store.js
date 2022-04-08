// import rerenderEntireTree from './../index'
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          text: "How are you?",
          likesCount: 3,
        },
        {
          id: 2,
          text: "It's my beer",
          likesCount: 68,
        },
        {
          id: 3,
          text: "Hey, loooooook",
          likesCount: 26,
        },
        {
          id: 4,
          text: "New text",
          likesCount: 7,
        },
        {
          id: 5,
          text: "...",
          likesCount: 2,
        },
        {
          id: 6,
          text: "Imposible!",
          likesCount: 30,
        },
      ],
      newPost: "test",
    },
    messagePage: {
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
    },
    sidebar: {},
  },
  _callUpdate() {
    console.log("something");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    store._callUpdate = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action); //Данная функция возвращает state, потому мы и можем ее сюда записать
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callUpdate(this._state);
  }
}

export default store;
window.store = store;







// export default this._state;
//Этот файл всего лишь пример работы библиотеки redux