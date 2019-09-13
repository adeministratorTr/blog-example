import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { API_URL } from 'helpers/api';
import postReducers from 'reducers/post';
import * as postActions from 'actions/post';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Reducer tests", () => {
  afterEach(() => {
    fetchMock.restore();
  })

  it("should return the initial state", () => {
    expect(postReducers(null, {})).toEqual(null);
  });

  it("should creates POSTS_SUCCESS action when fetchin blog posts", () => {
    fetchMock.getOnce(`${API_URL}/posts`, {
      posts: [
        {userId: 1, id: 1, title: "post title", body: "post long body"},
        {userId: 1, id: 2, title: "post title 2", body: "post long long body"}
      ]
    })

    const expectedActions = [
      {type: postActions.types.POSTS_START},
      {type: postActions.types.POSTS_SUCCESS, posts: {
        "posts": 
          [
            {userId: 1, "id": 1, title: "post title", body: "post long body"}, 
            {userId: 1, "id": 2, title: "post title 2", body: "post long long body"}
          ]
        }
      }
    ]

    const store = mockStore({ posts: [] })

    return store.dispatch(postActions.fetchAllPosts())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
