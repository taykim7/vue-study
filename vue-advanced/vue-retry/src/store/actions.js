import { fetchSecondList, fetchThirdList } from '../api/index'

export default{
    async FETCH_SECOND(context) {
      try {
        const response = await fetchSecondList();
        // mutations 호출!
        context.commit('SET_SECOND', response.data)
        // 결과값이 return되어야 순서를 보장할 수 있음 **
        return response;
      } catch (error) {
        console.log(error)
      }   
    },
    // 지금은 다 같은 api를 호출하지만, 다르게도 가능
    async FETCH_THIRD_ONE(context) {
      try {
        const response = await fetchThirdList();
        context.commit('SET_THIRD_ONE', response.data)
        return response;
      } catch (error) {
        console.log(error)
      }   
    },
    async FETCH_THIRD_TWO(context) {
      try {
        const response = await fetchThirdList();
        context.commit('SET_THIRD_TWO', response.data)
        return response;
      } catch (error) {
        console.log(error)
      }   
    },
    async FETCH_THIRD_THREE(context) {
      try {
        const response = await fetchThirdList();
        context.commit('SET_THIRD_THREE', response.data)
        return response;
      } catch (error) {
        console.log(error)
      }   
    },
}