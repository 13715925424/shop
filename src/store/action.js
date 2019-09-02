import * as api from '@/api'
export default{
    //设置test1数据
    async getTest1({commit}){
        //异步请求数据
        const result = await api.firstTest();
        if(result.data.Status==1){
            commit('SET_TEST1',result.data.Data.BuyFiveAmount)
        }else{
            //请求报错
        }
    }
}