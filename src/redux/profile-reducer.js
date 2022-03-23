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
  switch(state, action.type) {
    case ADD_POST:
      state.posts.push({
        id: 7,
        text: state.newPost,
        likesCount: 0,
      })
      state.newPost = '';
      return state;
    case UPDATE_NEW_POST_MESSAGE:
      state.newPost = action.newPostText;
      return state;
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