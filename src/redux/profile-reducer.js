const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE";

let initialState = {
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
};

export default function profileReducer(state = initialState, action) {
  /*Тут желательно переменные не создавать ибо редюсер диспачится в любом случае, 
  и всякий раз когда он будет диспачится будет создаваться эта переменная */
  switch(state, action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        text: state.newPost,
        likesCount: 0,
      };
      //Следующее выражение показывает как правильно копировать сложные данные:
      return {
        ...state,
        newPost: '',
        posts: [...state.posts, newPost],
      };
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