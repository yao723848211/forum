import request from "../utils/http";
//登录
export function islogin(userName,Password) {
    const formData=new FormData();
    formData.append('username',userName);
    formData.append('password',Password);
    formData.append('rememberMe',true)
    return request.post('/api/login',formData)
}


//注册-验证码
export function code(mobile) {
    return request.get(`/api/short-message/vcode/${mobile}`)
}

//注册
export function signin(loginName,code,phonenumber,password,userName) {
    const formData=new FormData();
    formData.append('loginName',loginName);
    formData.append('code',code);
    formData.append('phonenumber',phonenumber);
    formData.append('password',password);
    formData.append('userName',userName);
    return request.post('/api/registry',formData)
}

//退出登录
export function exitlogin() {
    return request.get('/api/logout')
}

//查看个人信息
export function wathcpersonmataion() {
    return request.get('/api/login-user/info')
}

//修改头像

export function amendpic(avatarfile) {
    const formData=new FormData();
    formData.append('avatarfile',avatarfile);
    // const pic=new BigInt64Array();
    return request.post('/api/system/user/profile/update/avatar/nos',formData,{contentType:"multipart/form-data"})
}

//忘記密碼
export function forgetpassword(loginName,password,phonenumber,code) {
    const formData=new FormData();
    formData.append('loginName',loginName);
    formData.append('code',code);
    formData.append('phonenumber',phonenumber);
    formData.append('password',password);

    return request.post('/api/password/forget',formData)
}

//修改信息
export  function amendmataion(userName,phonenumber) {
    const formData=new FormData();
    formData.append('userName',userName);

    formData.append('phonenumber',phonenumber);
    return request.post('/api/system/user/profile/update',formData)

}

//上传照片

export function uploadingpic(file,fileUseForEnum) {
    const formData=new FormData();
    formData.append('file',file);
    formData.append('fileUseForEnum',fileUseForEnum);
    return request.post('/api/nos/upload/image',formData)

}

//发表评论

export function comment(postId,commentContent) {
    const formData=new FormData();
    formData.append('postsId',postId);
    formData.append('commentContent',commentContent);
    return request.post('/api/bbs/bbsComment/site/add',formData)
}

//删除言论

export function Delete(ids) {
    const formData=new FormData();
    formData.append('ids',ids);
    return request.post('/api/bbs/bbsComment/site/remove',formData)
}