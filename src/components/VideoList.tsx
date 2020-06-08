import React from 'react';
import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';
import { Video } from '../interfaces/video';

interface IProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

export default ({ videos, onVideoSelect }: IProps) => {
  const listOfVideos = videos.map((video) => (
    <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};
