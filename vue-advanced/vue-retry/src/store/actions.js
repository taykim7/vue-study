import { fetchSecondList } from '../api/index'

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
    }
}