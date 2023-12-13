import axios from 'axios';

// api url을 분리
// 원래는 이런식임 → https://api.hnpwa.com/v0/news/1.json

// 1. HTTP Request와 Response와 관련된 기본 설정을 따로
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchFirstList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchSecondList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchThirdList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}
// pageName을 받음
function fetchHocList(pageName) {
  console.log(`응, ${pageName} 이거 패치할게`)
  if (pageName === 'usehoc1') {
    return axios.get(`${config.baseUrl}news/1.json`)
  } else {
    return axios.get(`${config.baseUrl}ask/1.json`)
  }
}
function fetchMixinList(pageName) {
  console.log(pageName);
  if (pageName === 'mixin1') {
    return axios.get(`${config.baseUrl}news/1.json`)
  } else {
    return axios.get(`${config.baseUrl}ask/1.json`)
  }
}

export {
  fetchFirstList,
  fetchSecondList,
  fetchThirdList,
  fetchHocList,
  fetchMixinList,
}