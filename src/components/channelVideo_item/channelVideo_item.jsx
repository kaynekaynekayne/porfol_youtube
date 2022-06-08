import React,{memo} from 'react';
import styles from './channelVideo_item.module.css';

const ChannelVideoItem = memo(({playlist, display, playlistItems}) => {

    const displayType = display==='list' ? styles.list : styles.grid;
    const {thumbnails}=playlist.snippet;
    return(
        <li
            onClick={()=>playlistItems(playlist.id)}
            className={`${styles.container} ${displayType}`}>
            <div className={styles.video}>

                {thumbnails.high===undefined ? 
                    (<img 
                        className={styles.thumbnail} 
                        src="/images/empty-background.png" 
                        alt="thumbnail">
                    </img>)
                    : 
                    (<img 
                        className={styles.thumbnail} 
                        src={thumbnails.high.url}
                        alt="thumbnail">
                    </img>)
                }
                <div className={styles.metadata}>
                    <p className={styles.title}>{playlist.snippet.title}</p>
                    {/* <p className={styles.channel}>{playlist.snippet.channelTitle}</p> */}
                </div>
            </div>
        </li>
    )
}
);
export default ChannelVideoItem;