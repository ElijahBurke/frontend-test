const BASE_URL = 'http://localhost:3001';

const fetchRequest = (path, options = {}) => fetch(`${BASE_URL}/${path}`, options)
  .then((res) => res.json());

export const getListTargets = async () => fetchRequest('list-targets');

export const getData = () => fetchRequest('data');

export const getPrediction = (target) => fetchRequest(`predict/?target=${target}`);
