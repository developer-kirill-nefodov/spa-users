import {api} from "./index";

export const getListUsers = (page, pageSize) => {
  return api.get('/public/v1/users', {
    params: {
      page,
      per_page: pageSize
    }
  })
}

export const getOneUser = async (id) => {
  return await api.get('/public/v1/users', {
    params: {id}
  });
}

export const createUser = async (data) => {
  return await api.post(`/public/v1/users`, data);
}

export const updateUser = async (data) => {
  return await api.patch(`/public/v1/users/${data.id}`, data);
}