import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail= ({video,channelPlaylist}) => {
    // console.log(video)
    return (
        <section className={styles.detail}>
            <iframe 
                className={styles.video}
                title="youtube video player"
                type="text/html" 
                width="100%"    
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0" 
                allowFullScreen>
            </iframe>
            <h3>{video.snippet.title}</h3>
            <span className={styles.channelTitle} onClick={()=>{channelPlaylist(video.snippet.channelId)}}>{video.snippet.channelTitle}</span>
            <pre className={styles.description}>{video.snippet.description}</pre>
        </section>
    )
};

export default VideoDetail;