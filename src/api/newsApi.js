import request from "../utils/http";

//新闻列表
export function getNewsList(pageNum,pageSize) {
    const url = `/api/cms/article/open/hot/list`;
    const formData = new  FormData();
    formData.append("pageNum",pageNum);
    formData.append("pageSize",pageSize);
    return request.post(url,formData);
}

//新闻详情
export  function getNewsDetail(articleId) {
    const url=`/api/cms/article/open/detail/${articleId}`
    return request.get(url)
}

