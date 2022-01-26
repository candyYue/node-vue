import api from './api'
import request from '../request'
const uploadAudioFile = (data) => {
  return request(api.uploadAudioFile, data)
}
const getArticleList = (data) => {
  return request(api.getArticleList, data)
}
const getTodolist = (data) => {
  return request(api.getTodolist, data)
}
const addTodolist = (data) => {
  return request(api.addTodolist, data)
}
const modifyTodolist = (data) => {
  return request(api.modifyTodolist, data)
}
const deleteTodolist = (data) => {
  return request(api.deleteTodolist, data)
}
const getChinaDis = (data) => {
  return request(api.getChinaDis, data)
}

export {
  uploadAudioFile,
  getArticleList,
  getTodolist,
  addTodolist,
  modifyTodolist,
  deleteTodolist,
  getChinaDis
}