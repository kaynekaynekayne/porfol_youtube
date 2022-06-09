import React,{useState,useEffect} from 'react';
import styles from './video_detail.module.css';

const VideoDetail= ({video,getPlaylists}) => {
    
    const {description}=video.snippet;
    const [showMore,setShowMore]=useState(false);

    const onClickChannel=()=>{
        getPlaylists(video.snippet.channelId)
    }

    useEffect(() => {
        window.scrollTo(0,0);
        setShowMore(false);
    }, [video])

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
            <div className={styles.channel}>
                <span className={styles.channelTitle} onClick={onClickChannel}>{video.snippet.channelTitle}</span>
                <i id={styles.channelLogo} className="fas fa-check-square"></i>
            </div>
            <div className={styles.textbox}>
                <pre className={styles.description}>
                    {showMore ? description : description.length>300 && description.substr(0,298) }
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