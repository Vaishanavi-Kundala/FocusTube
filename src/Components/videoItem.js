import React from  'react'
import {Media} from 'react-bootstrap';
import './videoItem.css';

function videoItem({video, setSelectedVid}){

    return(
        <Media className = "card">
            <img
                width={400}
                height={250}
                src={video.snippet.thumbnails.medium.url}
                alt="thumbnail"
                onClick={() => setSelectedVid(video)}
            />
            <Media.Body>
                <h5>{video.snippet.title}</h5>
                <p>
                    <br></br>
                </p>
            </Media.Body>
        </Media>
    );
}

export default videoItem;