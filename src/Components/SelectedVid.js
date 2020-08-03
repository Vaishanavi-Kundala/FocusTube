import React from  'react';



function SelectedVid({video}){

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <iframe
                frameBorder="0"
                height="600"
                width="1290"
                title="Video Player"
                src={videoSrc}
            />
        </div>
    );
}

export default SelectedVid;