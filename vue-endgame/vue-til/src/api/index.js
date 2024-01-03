import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    // (1)공통 설정을 미리 넣을 수 있음
    //baseURL: 'http://localhost:3000',
    // (2) 환경변수 .env 활용
    baseURL: process.env.VUE_APP_API_URL,
  });
  
  // 공통설정을 한 것을 interceptor에 넘김
  // 넘긴 인스턴스에 intercepotor를 설정하고 다시 return
  return setInterceptors(instance);
}
const instance = createInstance();

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

// 학습 노트 데이터 조회 API
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };