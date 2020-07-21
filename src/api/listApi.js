import request from "../utils/http";


//帖子列表
export function getPostList(title = '', postsId = '', categoryId = '') {
    const url = `/api/bbs/bbsPosts/open/list`
    const formData = new FormData();
    formData.append("categoryId", categoryId)
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
export function commentList(postsId, pageNum = 1, pageSize = 20) {
    const url = `/api/bbs/bbsComment/open/list`;
    const formData = new FormData();
    formData.append("postsId", postsId)
    formData.append("pageNum", pageNum)
    formData.append("pageSize", pageSize)
    return request.post(url, formData)
}

//回复列表
export function replyComment(parentId) {
    const url = `/api/bbs/bbsComment/open/reply/list`;
    const formData = new FormData();
    formData.append("parentId", parentId)
    return request.post(url, formData)
}

//回复言论
export function revert(postsId,parentId,commentContent) {
    const formData=new FormData();
    formData.append('postsId',postsId);
    formData.append('parentId',parentId);
    formData.append('commentContent',commentContent);
    return request.post('/api/bbs/bbsComment/site/reply/add',formData)
}


//修改帖子
export function emendpost(postsId,title) {
const formData=new FormData();
formData.append('postsId',postsId);
formData.append('title',title);
return request.post('/api/bbs/bbsPosts/site/edit',formData)
}













//publication 发表评论
export function publicationComment(postsId, commentContent) {
    const url = `/api/bbs/bbsComment/site/add`;
    const formData = new FormData();
    formData.append("postsId", postsId);
    formData.append("commentContent", commentContent)
    return request.post(url, formData)
}

//创建帖子

export function createPost(categoryId, title, intro, coverImgUrl) {
    const url = `/api/bbs/bbsPosts/site/add`;
    const formData = new FormData();
    formData.append("categoryId", categoryId);
    formData.append("title", title);
    formData.append("intro", intro);
    formData.append("coverImgUrl", coverImgUrl);
    return request.post(url, formData)

}