import axios from 'axios';

const instance = axios.create({
  // 공통 설정을 미리 넣을 수 있음
  baseURL: 'http://localhost:3000',
});

function registerUser(userData) { 
  // return axios.post('http://localhost:3000/signup', userData);
  // 공통 설정으로 더 단순하게 변경
  return instance.post('signup', userData)
}

export { registerUser };