// 로그인, 회원가입, 탈퇴 API
import { instance } from './index'

// 회원가입 API
function registerUser(userData) { 
  // return axios.post('http://localhost:3000/signup', userData);
  // 공통 설정으로 더 단순하게 변경
  return instance.post('signup', userData)
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData)
}

export {
  registerUser,
  loginUser
}