import request from '../utils/http'

//MV列表
export function getMvMusicList(area,limit) {
    const url = `/musicapi/mv/first`
    const  formData =new FormData();
    formData.append("area",area);
    formData.append("limit",limit)
    return request.get(url,formData)
}

//MV视频详情
export function getMvMusicListDetail(id) {
    const url = `/musicapi/mv/url?id=${id}`
    return request.get(url)
}

//音乐评论

export function getMvMusicComment(id,limit=20,offset=20) {
    const url = `/musicapi/comment/mv?id=${id}&limit=${limit}&offset=${offset}`
    return request.get(url)
}
