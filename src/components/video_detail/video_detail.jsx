import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail= ({video,getPlaylists}) => {
    // video-> "선택 당한" 비디오 
    
    const onClickChannel=()=>{ //채널명 클릭
        console.log("click channel")
        getPlaylists(video.snippet.channelId)
    }

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
            <h3>{video.snippet.title.replace(/&quot;/g, '\"')}</h3>
            <span className={styles.channelTitle} onClick={onClickChannel}>{video.snippet.channelTitle}</span>
            <pre className={styles.description}>{video.snippet.description}</pre>
        </section>
    )
};

export default VideoDetail;