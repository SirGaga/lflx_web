import instance from "../utils/request";

export const findUserList = (current,size) => {
  return  instance.get('/system/user/',{
    params: {
      current: current,
      size: size
    }
  })
}