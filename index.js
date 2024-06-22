const API_BASE_URL = 'https://jsonplaceholder.typicode.com/';

/**
 * getPosts
 * @returns {Array<{}>} Array of all posts
 */

export const getPosts = async () => {
  const data = await fetch(`${API_BASE_URL}/posts`).then((resp) => resp.json()).then((json) => {return json});
  return data;
};

/**
 * 
 * @param {string id} id of the post 
 * @returns {} post Object
 */

export const getPostById = async (id) => {
  const data = await fetch(`${API_BASE_URL}/posts/${id}`).then((resp) => resp.json()).then((json) => {return json});
  return data;
};

const LOG_PREFIX = '>';

export const superLog = (text) => {
  console.log(`${LOG_PREFIX}${text}`);
};
