import instance from "../utils/request";

export const findDeptTree = () => {
  return  instance.get('/system/dept/tree')
}