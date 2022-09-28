import httpClient from '../http-common';

const getAll = () => {
  return httpClient.get('');
};

const create = (data) => {
  return httpClient.post('/auth/tourist_signup', data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};
const login = (data) => {
  return httpClient.post('/tourist', data);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
export default { getAll, create, get, update, remove, login };
