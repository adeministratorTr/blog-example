import { types } from 'actions/post';

const initialState = {
  posts: [],
  isLoading: false,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.POSTS_START:
      return {
        ...state,
        isLoading: true
      }
    
    case types.POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.posts,
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

    default:
      return state;
  }

}
