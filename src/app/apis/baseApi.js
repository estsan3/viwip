import axios from 'axios';

import config from '../assets/config';

export default axios.create({
  baseURL: config.BASE_URL
});
