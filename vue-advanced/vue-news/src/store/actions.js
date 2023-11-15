import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo } from '../api/index'

export default{
  /**
   * News api
  */
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        console.log(response.data);
        // 컨텍스트의 커밋으로 뮤테이션 호출
        context.commit('SET_NEWS', response.data);
      })
    .catch(error => {
      console.log(error)
    })
  },
  /**
   * Jobs api
   * - context와 response를 더 줄이기
   */
  FETCH_JOBS({commit}) {
    fetchJobsList()
      .then( ({ data }) => {
        commit('SET_JOBS', data);
      })
  },
  /**
   * Ask api
   */
  FETCH_ASK({commit}) {
    fetchAskList()
      .then( ({ data }) => {
        commit('SET_ASK', data)
      })
  },
  /** */
  FETCH_USER({commit}, userName) {
    fetchUserInfo(userName)
      .then( ({ data }) => {
        commit('SET_USER', data)
      })
      .catch(error=> {
        console.log(error)
      })
  }
}