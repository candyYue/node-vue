import api from './api'
import request from '../request'
const getTest = (data) => {
  return request(api.getTest, data)
}

const uploadAudioFile = (data) => {
  return request(api.uploadAudioFile, data)
}

export {
  getTest,
  uploadAudioFile
}