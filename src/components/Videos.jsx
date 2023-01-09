import React from 'react';
import { Stack, Grid } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  console.log(videos);
  return (
    <Grid
      container
      spacing={3}
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="flex-start"
    >
      {videos.map((item, idx) => (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3} key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
