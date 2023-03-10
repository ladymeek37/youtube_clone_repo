import React from 'react';
import { Link } from 'react-router-dom';

export const RelatedVideosPresenter = ({video}) => {
return (
    <li>
        <Link to = {`/video/${video.id.videoId}`}>
            <img src={video.snippet.thumbnails.medium.url}/>
            <p class = "videotitle" maxlength="10"> {video.snippet.title}</p>
        </Link>
    </li>
    );
}

const RelatedVideosMapper = ({videos}) => {
    return ( 
        <li>
            {videos.map(video => <RelatedVideosPresenter video = {video} />)}
        </li>
     );
}
 
export default RelatedVideosMapper;