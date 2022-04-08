const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE";

let initialState = {
  posts: [
    {
      id: 1,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF3CYnR_0RjKeoiPaNKcBQJ8g4jr9MjXTQVIb_9Jkvmx2gOBAa50yI44W4d250zu_9EM&usqp=CAU',
      text: "How are you?",
      likesCount: 3,
    },
    {
      id: 2,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR645lC0rJoigXyHYS3bmC35AzNBBvuNzjOS1vaNGW7ZvRRFzZ9QoMEOkWL35JR4RiKtag&usqp=CAU",
      text: "It's my beer",
      likesCount: 68,
    },
    {
      id: 3,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsNJDa6-XuAiczmfF56cjgJJ8p1Y3W_57n7PlDSJ7Asjx6JhYsmWUkqnwkI5NDRmkRrc&usqp=CAU",
      text: "Hey, loooooook",
      likesCount: 26,
    },
    {
      id: 4,
      avatar: "https://i.pinimg.com/736x/5c/c8/e4/5cc8e4b793c1b1a35462b569fa96e7db.jpg",
      text: "New text",
      likesCount: 7,
    },
    {
      id: 5,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF3CYnR_0RjKeoiPaNKcBQJ8g4jr9MjXTQVIb_9Jkvmx2gOBAa50yI44W4d250zu_9EM&usqp=CAU',
      text: "...",
      likesCount: 2,
    },
    {
      id: 6,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxja3SWqS4CFSfSuEQ_04g5cm95rytZ9uAvAUFCI9XHNlK0qrBB4d9EPjozuHi_HdJ9w&usqp=CAU",
      text: "Imposible!",
      likesCount: 30,
    },
  ],
  newPost: "",
};

export default function profileReducer(state = initialState, action) {
  /*Тут желательно переменные не создавать ибо редюсер диспачится в любом случае, 
  и всякий раз когда он будет диспачится будет создаваться эта переменная */
  switch(state, action.type) {
    case ADD_POST: {
      if (state.newPost !== "") {
        let newPost = {
          id: 7,
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF3CYnR_0RjKeoiPaNKcBQJ8g4jr9MjXTQVIb_9Jkvmx2gOBAa50yI44W4d250zu_9EM&usqp=CAU',
          text: state.newPost,
          likesCount: 0,
        };
        //Следующее выражение показывает как правильно копировать сложные данные:
        return {
          ...state,
          newPost: '',
          posts: [...state.posts, newPost]
        }
      } else return state;
    }
    case UPDATE_NEW_POST_MESSAGE: {
      let stateCopy = {...state};
      stateCopy.newPost = action.newPostText;
      return stateCopy;
    }
    default:
      return state;
    } 
  }

  export let addPostActionCreator = () => {
    return (
      {
        type: ADD_POST,
      }
    );
  }
  
  export let updateNewPostCreator = (post) => {
    return (
      {
        type: UPDATE_NEW_POST_MESSAGE,
        newPostText: post,
      }
    );
  }