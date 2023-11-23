import {
  // fetchNewsList,
  // fetchAskList,
  // fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList
} from '../api/index'

export default{
  /**
   * News api
  */
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then(response => {
  //       //console.log(response.data);
  //       // 컨텍스트의 커밋으로 뮤테이션 호출
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // },
  /**
   * Jobs api
   * - context와 response를 더 줄이기
   */
  // FETCH_JOBS({commit}) {
  //   fetchJobsList()
  //     .then( ({ data }) => {
  //       commit('SET_JOBS', data);
  //     })
  // },
  /**
   * Ask api
   */
  // FETCH_ASK({commit}) {
  //   fetchAskList()
  //     .then( ({ data }) => {
  //       commit('SET_ASK', data)
  //     })
  // },
  /**
   * User
   */
  FETCH_USER({commit}, userName) {
    fetchUserInfo(userName)
      .then( ({ data }) => {
        commit('SET_USER', data)
      })
      .catch(error=> {
        console.log(error)
      })
  },
  /**
   * Item
   */
  FETCH_ITEM({commit}, id) {
    fetchItemInfo(id)
      .then( ({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(error=>{
        console.log(error);
      })
  },
  /**
   * List
   */
  FETCH_LIST({commit}, pageName) {
    fetchList(pageName)
    .then( ({ data }) => {
      commit('SET_LIST', data)
    })
    .catch(error=>{
      console.log(error);
    })
  }
}