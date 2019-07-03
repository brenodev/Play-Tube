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
        style={{'height':'555px' }}
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
          placeholder='https://i.pining.com/originals/a2/81/38/a28138c18f0e24e9bab084aa97770be.jpg'
        /> 
        <p>{props.video.snippet.title}</p>
        <p>{props.video.snippet.description}</p>
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