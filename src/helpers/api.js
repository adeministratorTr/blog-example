export const API_URL = 'https://jsonplaceholder.typicode.com';

const headerOptions = {
  "Content-type": "application/json; charset=UTF-8"
}
//const getUrl = (url, params) => `${API_URL}/${TYPE}/${url}` + (params ? `&${params}` : '');

const api = {
  getAllPosts(){
    return fetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then((result) => result)
      .catch(e => {
        return e;
    });
  },

  getPostDetail(postId) {
    return fetch(`${API_URL}/posts/${postId}`)
      .then((response) => response.json())
      .then((result) => result)
      .catch(e => {
        return e;
    });
  },

  addNewPost(headerText, bodyText) {
    return fetch(`${API_URL}/posts/`, {
      method: 'POST',
      body: JSON.stringify({
        title: headerText,
        body: bodyText,
        userId: 1 //Left it by purpose since this project doesnt include any login feature.
      }),
      headers: headerOptions
    })
  }
}

export default api;