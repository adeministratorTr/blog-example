import { types } from 'actions/post';

const initialState = {
  posts: [],
  isLoading: false,
  error: false,
  isAddPostSuccess: false,
  isDeletePostSuccess: false
}

//Dont do it at work :)
let dateList = [];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomDate(numberOfItems) {
  const earliestDay = '01-01-2010';
  const currentDate = new Date().toLocaleDateString()
  for(let i=0; i<numberOfItems; i++) {
    const newDate = new Date(getRandomArbitrary(new Date(earliestDay).getTime(), new Date(currentDate).getTime())).toLocaleDateString();
    dateList.push(newDate)
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.POSTS_START:
      return {
        ...state,
        isLoading: true
      }
    
    case types.POSTS_SUCCESS:
      randomDate(action.posts.length)
      return {
        ...state,
        isLoading: false,
        posts: action.posts,
        dateList,
        error: false
      }

    case types.POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      }

    case types.FETCH_POST_START:
      return {
        ...state,
        isLoading: true
      }
    
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: action.post,
        error: false
      }

    case types.FETCH_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      }
      
    
    case types.ADD_POST_START:
      return {
        ...state,
        isLoading: true
      }

    case types.ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAddPostSuccess: action.addPostRespone.status === 201
      }

    case types.ADD_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isAddPostSuccess: false,
        error: true
      }

    case types.DELETE_POST_START:
      return {
        ...state,
        isLoading: true,
        isDeletePostSuccess: false,
        error: true
      }

    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDeletePostSuccess: action.addPostRespone.status === 200,
      }

    case types.DELETE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isDeletePostSuccess: false,
        error: true
      }

    default:
      return state;
  }

}
