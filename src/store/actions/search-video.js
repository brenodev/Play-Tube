import youtubeSearch from 'youtube-api-v3-search'
import YTApi from '../../services/api'

const API_KEY = YTApi

// avisa inicio de busca do video
export const startSearchVideo = () => {
  return {
    type: 'BUSCA_VIDEO_INICIO',
    carregando: true,
    erro: false
  }
}
// quando a busca sucesso
export const searchVideoSucess = (videos) => {
  return {
    type: 'BUSCA_VIDEO_SUCESSO',
    videos,
    carregando: false,
    erro: false
  }
}
// quando a busca da erro
export const searchVideoErro = () => {
  return {
    type: 'BUSCA_VIDEO_ERRO',
    carregando: false,
    erro: true
  }
}
//buscar o video
export const searchVideo = (term) => {
  return dispatch => {
    dispatch(startSearchVideo())
    youtubeSearch(API_KEY, {q: term})
    .then((data) => dispatch(searchVideoSucess(data.items))) // se deu certo carrega a lista de videos
    .catch(() => dispatch(searchVideoErro())) // volta vazio caso dê erro 
  }
}
