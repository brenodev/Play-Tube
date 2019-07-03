import React, { Component } from "react";
import { List, Image, Dimmer, Loader } from "semantic-ui-react";
import { connect } from 'react-redux'
import { dispatch } from "rxjs/internal/observable/pairs";

// CUSTON REDUCER
import { playVideo } from '../store/actions/play-video'


class VideoList extends Component {
  
  renderVideo(video) {
    return(
      <List animated verticalAlign="middle" key={video.etag}>
          <List.Item onClick={() => this.props.play(video)}>
            <Image src={video.snippet.thumbnails.default.url} />
            <List.Content>
              <List.Header>{video.snippet.title}</List.Header>
            </List.Content>
          </List.Item>
      </List>
    )
  }

  render(){
    return (
      <div className="video-list">
        {
          this.props.loading && (<Dimmer active>
            <Loader>Loading . . .</Loader>
          </Dimmer>)
        }
        {
          this.props.video.map(video => {
            console.log('myVideo', video)
            return this.renderVideo(video)
          })
        }
      </div>
    );
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    play: (video) => dispatch(playVideo(video))
  }
  
}

const mapStateToProps = (state) => {
  return {
    video: state.searchVideoReducer.video,
    loading: state.searchVideoReducer.loading,
    error: state.searchVideoReducer.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)
