import baseApi from './baseApi';

class UserApi {
  login(email,password) {
    const data = {email,password}
    return baseApi.post('/api/user/login', data);
  }

}

export default new UserApi();
