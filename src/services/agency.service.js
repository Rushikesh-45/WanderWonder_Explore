import httpClient from '../http-common';

// const getAll = () => {
//   return httpClient.get('/travel_agency');
// };

const create = (data) => {
  return httpClient.post('/auth/agency_signup', data);
};

// const get = (id) => {
//   return httpClient.get(`${id}`);
// };
// const login = (data) => {
//   return httpClient.post('/travel_agency', data);
// };

// const update = (data) => {
//   return httpClient.put('/travel_agency', data);
// };

// const remove = (id) => {
//   return httpClient.delete(`/travel_agency/${id}`);
// };
// export default { getAll, create, get, update, remove, login };
export default { create };