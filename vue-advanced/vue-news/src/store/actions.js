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
  // return await fetchNewsList()
    //   .then(response => {
    //     //console.log(response.data);
    //     // 컨텍스트의 커밋으로 뮤테이션 호출
    //     context.commit('SET_NEWS', response.data);
    //     return response;
    //   })
    // .catch(error => {
    //   console.log(error)
    // })

    // async 화
    async FETCH_NEWS(context) {
      try {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data)
        // 결과값이 return되어야 순서를 보장할 수 있음 **
        return response;
      } catch (error) {
        console.log(error)
      }   
  },
  /**
   * Jobs api
   */
  async FETCH_JOBS({commit}) {
    try{
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error)
    }  
  },
  /**
   * Ask api
   */
  async FETCH_ASK({commit}) {
    try{
      const response = await fetchAskList();
      commit('SET_ASK', response.data);
      return response;
    } catch (error) {
      console.log(error)
    }  
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