import api from 'helpers/api';

export const types = {
  POSTS_START: 'POSTS/FETCH_POSTS_START',
  POSTS_SUCCESS: 'POSTS/FETCH_POSTS_SUCCESS',
  POSTS_ERROR: 'POSTS/FETCH_POSTS_ERROR',
  FETCH_POST_START: 'POST/FETCH_SELECTED_POST_START',
  FETCH_POST_SUCCESS: 'POST/FETCH_SELECTED_POST_SUCCESS',
  FETCH_POST_ERROR: 'POST/FETCH_SELECTED_POST_ERROR'
}

export const fetchAllPosts = () => dispatch => {
  dispatch({ type: types.POSTS_START });
  return api.getAllPosts()
    .then((result) => {
      dispatch({
        type: types.POSTS_SUCCESS,
        posts: result
      })
    })
    .catch((e)=> {
      dispatch({
        type: types.POSTS_ERROR
      }, () => { console.log('API Posts Error: ', e) })
    });
}

export const fetchPostDetail = (postId) => dispatch => {
  dispatch({
    type: types.FETCH_POST_START
  });
  return api.getPostDetail(postId)
    .then((result) => {
      dispatch({
        type: types.FETCH_POST_SUCCESS,
        post: result
      })
    })
    .catch((e) => {
      dispatch({
        type: types.FETCH_POST_ERROR
      }, () => { console.log('API Post Error: ', e) })
    })
}
