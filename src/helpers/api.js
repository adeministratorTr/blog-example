export const API_URL = 'https://jsonplaceholder.typicode.com';

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
  }

}

export default api;