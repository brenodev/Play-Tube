import React from "react";
import { List, Image } from "semantic-ui-react";
import { connect } from 'react-redux'

const VideoList = props => {
  return (
    <div className="video-list">
      <List animated verticalAlign="middle">
        <List.Item>
          <Image avatar src="" />
          <List.Content>
            <List.Header>Título do Vídeo</List.Header>
          </List.Content>
        </List.Item>
      </List>
    <p>{JSON.stringify(props)}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    video: state.searchVideoReducer.video,
    loading: state.searchVideoReducer.loading,
    error: state.searchVideoReducer.error
  }
}

export default connect(mapStateToProps, null)(VideoList)
