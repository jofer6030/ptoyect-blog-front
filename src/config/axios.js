import axios from 'axios';

const axiosFetch = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

export default axiosFetch;
