import youtubeSearch from 'youtube-api-v3-search'
import YTApi from '../../services/api'

const API_KEY = YTApi

// avisa inicio de busca do video
export const searchVideoStart = () => {
  return {
    type: 'SEARCH_VIDEO_START',
    loading: true,
    error: false
  }
}
// quando a busca retorna sucesso
export const searchVideoSuccess = (video) => {
  return {
    type: 'SEARCH_VIDEO_SUCCESS',
    video,
    loading: false,
    error: false
  }
}
// quando a busca retorna error
export const searchVideoError = () => {
  return {
    type: 'SEARCH_VIDEO_ERROR',
    loading: false,
    error: true
  }
}
//buscar o video
export const searchVideo = (term) => {
  return dispatch => {
    dispatch(searchVideoStart())
    youtubeSearch(API_KEY, {q: term})
    .then((data) => dispatch(searchVideoSuccess(data.items))) // se deu certo carrega a lista de videos
    .catch(() => dispatch(searchVideoError())) // se der errado volta vazio 
  }
}
