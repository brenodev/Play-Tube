import React from 'react'
import { connect } from 'react-redux'
import { Advertisement, Embed } from 'semantic-ui-react'

const VideoPlayer = props => {
  return (
  <div className='video-player'> 
{/* mostra algo enquanto não tem video  */}
    {
      !props.video.id && (
        <Advertisement 
        style={{'height':'433px' }}
        unit='top banner'
        test='Escolha um video para reproduzir'
      />
      )
    }
{/* reproduz o video clicado */}
    {
      props.video.id && (
      <div>
        <Embed 
          id={props.video.id.videoId} 
          source='youtube' 
          placeholder=''
        /> 
        <p className='video-title'>{props.video.snippet.title}</p>
        <p className='video-description'>{props.video.snippet.description}</p>
      </div>
      )
    }   
  </div>
  )
}
const mapStateToProps = (state) => {
  return {
    video: state.playVideoReducer.video
  }
}

export default connect(mapStateToProps, null)(VideoPlayer)