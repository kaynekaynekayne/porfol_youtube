import React,{useState} from 'react';
import styles from './video_detail.module.css';

const VideoDetail= ({video,getPlaylists}) => {
    
    const {description}=video.snippet;
    const [showMore,setShowMore]=useState(false);

    const onClickChannel=()=>{
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
            <div className={styles.box}>
                <pre className={styles.description}>
                    {showMore ? description : description.substr(0,298) }
                </pre>
                <button
                    className={styles.showButton} 
                    onClick={()=>setShowMore(!showMore)}>show more
                </button>
            </div>
        </section>
    )
};

export default VideoDetail;