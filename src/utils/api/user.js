import {api} from "./index";

export const getListUsers = async (page, pageSize) => {
  return await api.get('/public/v1/users', {
    params: {
      page,
      per_page: pageSize
    }
  })
}

export const getOneUser = async (id) => {
  return await api.get('/public/v1/users', {
    params: {
      id
    }
  });
}