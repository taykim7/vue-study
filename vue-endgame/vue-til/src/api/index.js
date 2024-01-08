import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액시오스 초기화 함수 (기본)
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 액시오스 초기화 함수 (url 필요한 경우)
function createInstanceWithAuth(url) {
  const instance = axios.create({
    // (1)공통 설정을 미리 넣을 수 있음
    //baseURL: 'http://localhost:3000',
    // (2) 환경변수 .env 활용
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  
  // 공통설정을 한 것을 interceptor에 넘김
  // 넘긴 인스턴스에 intercepotor를 설정하고 다시 return
  return setInterceptors(instance);
}

// 기본 초기화 변수
export const instance = createInstance();
// url이 항상 posts로 되어있는 변수
export const posts = createInstanceWithAuth('posts');