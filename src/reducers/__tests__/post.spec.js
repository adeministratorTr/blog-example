import postReducer from 'reducers/post';
import * as postActions from 'actions/post';

const initialState = {
  posts: [],
  isLoading: false,
  error: false
}

describe('Reducers Tests', () => {
  it('should return the initial state', () => {
    expect(postReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle POSTS_START / Loading state', () => {
    const loadingState = postReducer(initialState, { type: postActions.types.POSTS_START })
    expect(loadingState).toEqual({ 
      posts: [],
      isLoading: true,
      error: false
    })
  })

  it('should handle POSTS_SUCCESS / Posts state', () => {
    const successState = postReducer({
      posts: [
        {userId: 1, id: 1, title: "post title", body: "post long body"},
        {userId: 1, id: 2, title: "post title 2", body: "post long long body"}
      ]
    }, { 
      type: postActions.types.POSTS_SUCCESS,
      posts: [
        {userId: 1, "id": 1, title: "post title", body: "post long body"}, 
        {userId: 1, "id": 2, title: "post title 2", body: "post long long body"}
      ]
    })
    expect(successState).toEqual({ 
      posts: [
        {userId: 1, id: 1, title: "post title", body: "post long body"},
        {userId: 1, id: 2, title: "post title 2", body: "post long long body"}
      ],
      isLoading: false,
      error: false
    })
  })

  it('should handle POSTS_ERROR / Error state', () => {
    const errorState = postReducer(initialState, { type: postActions.types.POSTS_ERROR })
    expect(errorState).toEqual({ 
      posts: [],
      isLoading: false,
      error: true
    })
  })
})
