import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList
} from '../api/index'

export default{
  /**
   * News api
  */
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then(response => {
        //console.log(response.data);
        // 컨텍스트의 커밋으로 뮤테이션 호출
        context.commit('SET_NEWS', response.data);
        return response;
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
    return fetchJobsList()
      .then( ({ data }) => {
        commit('SET_JOBS', data);
        return data
      })
  },
  /**
   * Ask api
   */
  FETCH_ASK({commit}) {
    return fetchAskList()
      .then( (response) => {
        commit('SET_ASK', response.data)
        return response
      })
  },
  /**
   * User
   */
  FETCH_USER({commit}, userName) {
    return fetchUserInfo(userName)
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
    return fetchItemInfo(id)
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
    console.log(pageName)
    return fetchList(pageName)
    .then( response => {
      console.log('api 호출 중');
      commit('SET_LIST', response.data);
      return response;
    })
    .catch(error=>{
      console.log(error);
    })
  }
}