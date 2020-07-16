import request from "../utils/http";


//帖子列表
export function getPostList(postsId = '', title = '') {
    const url = `/api/bbs/bbsPosts/open/list`
    const formData = new FormData();
    formData.append("postsId", postsId)
    formData.append("title", title)
    return request.post(url, formData).then(res => {
        return {
            ...res
        }
    })
}

//专题列表
export function getThemeList(categoryId = '') {
    const url = `/api/bbs/bbsCategory/open/list?categoryId=${categoryId}`
    return request.post(url).then(res => {
        return {
            ...res
        }
    })

}

//帖子详情的列表
export function postListDetail(postsId) {
    const url = `/api/bbs/bbsPosts/open/detail/${postsId}`;
    return request.get(url)
}

//评论列表
export function commentList(postsId,pageNum=1,pageSize=10) {
    const url = `/api/bbs/bbsComment/open/list`;
    const formData = new FormData();
    formData.append("postsId",postsId)
    formData.append("pageNum",pageNum)
    formData.append("pageSize",pageSize)
    return request.post(url,formData)
}