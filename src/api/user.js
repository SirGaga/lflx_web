import instance from "../utils/request";

export const findUserList = () => {
  return instance.get({
    url: '/system/user',
    params: {
      current: 1,
      size: 20
    }
  })
}