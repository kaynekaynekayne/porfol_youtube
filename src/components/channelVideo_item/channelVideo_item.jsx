import React,{memo} from 'react';
import styles from './channelVideo_item.module.css';

const ChannelVideoItem = memo(({playlist, display}) => {

    const displayType = display==='list' ? styles.list : styles.grid;
    const {thumbnails}=playlist.snippet;
    return(
        <li 
            //특정 플레이리스트 아이템을 클릭하면
            //또 동영상 리스트들이 보여야됨
            onClick={()=>console.log(playlist)}
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