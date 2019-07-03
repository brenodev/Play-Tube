const INITIAL_STATE = {
  video: [],
  loading: false,
  error: false
}

export default function searchVideo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO_START':
      return {
        video: [],
        loading: true,
        error: false
      }
    case 'SEARCH_VIDEO_SUCCESS':
      return {
        video: action.video,
        loading: false,
        error: false
      }
    case 'SEARCH_VIDEO_ERROR':
      return {
        video: [],
        loading: false,
        error: true
      }
        
    default: return state
  }
}