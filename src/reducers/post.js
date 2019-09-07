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
      console.log('reducers/posts: ', action)
      return {
        ...state,
        isLoading: false,
        posts: action,
        error: false
      }

    case types.POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      }
  }

}
