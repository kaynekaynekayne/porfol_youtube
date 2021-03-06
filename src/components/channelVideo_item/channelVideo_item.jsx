import React,{memo} from 'react';
import styles from './channelVideo_item.module.css';

const ChannelVideoItem = memo(({playlist, playlistItems}) => {

    const {thumbnails}=playlist.snippet;
    return(
        <li
            onClick={()=>playlistItems(playlist.id)}
            className={styles.container} >
            <div className={styles.video}>

                {thumbnails.medium===undefined ? 
                    (<img 
                        className={styles.thumbnail} 
                        src="/images/empty-background.png" 
                        alt="thumbnail">
                    </img>)
                    : 
                    (<img 
                        className={styles.thumbnail} 
                        src={thumbnails.medium.url}
                        alt="thumbnail">
                    </img>)
                }
                <div className={styles.metadata}>
                    <p className={styles.title}>{playlist.snippet.title}</p>
                </div>
            </div>
        </li>
    )
}
);
export default ChannelVideoItem;