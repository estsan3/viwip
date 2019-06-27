import UserApi from "../apis/userApi";

export const login = (email, password) =>  {
  return UserApi.login(email, password);
};
