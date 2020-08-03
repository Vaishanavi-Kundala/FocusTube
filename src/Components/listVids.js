import React from  'react';

import VideoItem from './videoItem';

function listVids({vids, setSelectedVid}){

    const listOfVideos = vids.map(video => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          setSelectedVid = {setSelectedVid}
        />
      ));


    return(
        <div>
            {listOfVideos}
        </div>
    );
}

export default listVids;