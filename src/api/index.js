import { requestGET } from '../utils/axios/request'

// 获取歌单列表
const BaseUrl = 'http://127.0.0.1:3000'
export const getSongList = (params) => {
    return requestGET(`${BaseUrl}/top/playlist`, params)
}