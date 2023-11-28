import axios from 'axios';

// api url을 분리
// https://api.hnpwa.com/v0/news/1.json

// 1. HTTP Request와 Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}
async function fetchAskList() {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error)
  }
}
function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}
async function fetchUserInfo(username) {
  try {
    return await axios.get(`${config.baseUrl}user/${username}.json`)
  } catch (error) {
    console.log(error)
  }
}
async function fetchItemInfo(id) {
  try {
    return await axios.get(`${config.baseUrl}item/${id}.json`)
  } catch (error) {
    console.log(error)
  }
}
// news, ask, jobs 리팩토링
async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error)
  }
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
}