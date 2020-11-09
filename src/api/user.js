import instance from "../utils/request";

export const findUserList = (current,size,userVo) => {
  return  instance({
    url:'/system/user/',
    method: 'post',
    params: {
      current: current,
      size: size
    },
    data: userVo

  })
}