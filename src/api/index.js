import axios from './config'

let base = process.env.BASE_URL;
//测试1，获取50etf
export const firstTest = () => axios.post(`${base}/mobile/MobileStockTime/GetQryQuotationListModel`);
/**
 * 请求轮播图
 * @param {代理id} id 
 */
export const secondTest = (id) => axios({url:`${base}/mobile/MobileContentAdInfo/GetList`,params:{iAgentId:id},method:'post'})