import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video, onVideoClick, display}) => {

    const displayType = display==='list' ? styles.list : styles.grid;

    return(
        <li 
            onClick={()=>{onVideoClick(video)}} 
            className={`${styles.container} ${displayType}`}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={video.snippet.thumbnails.medium.url} alt="thumbnail"></img>
                <div className={styles.metadata}>
                    <p className={styles.title}>{video.snippet.title}</p>
                    <p className={styles.channel}>{video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
};

export default VideoItem;