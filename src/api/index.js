import { requestGET } from '../utils/axios/request'

const BaseUrl = 'http://127.0.0.1:3000'
    // 获取歌单列表
export const getSongList = (params) => {
        return requestGET(`${BaseUrl}/top/playlist`, params)
    }
    // 获取歌单分类
export const getCatlist = () => {
        return requestGET(`${BaseUrl}/playlist/catlist`)
    }
    //精品歌单标签列表
export const highqualityTags = () => {
        return requestGET(`${BaseUrl}/playlist/highquality/tags`)
    }
    //  获取精品歌单
export const highqualitySongslist = (params) => {
    return requestGET(`${BaseUrl}/top/playlist/highquality`, params)
}
// 获取banner图
export const banner = (params) => {
    return requestGET(`${BaseUrl}/banner`,params)
}