import React from 'react';
import ChannelVideoItem from '../channelVideo_item/channelVideo_item';
import styles from './channelVideo_list.module.css';

const ChannelVideoList = ({playlists,playlistItems}) => {

    return(
        <ul className={styles.videos}>
            {playlists.map(playlist=>
                <ChannelVideoItem
                    key={playlist.id} 
                    playlist={playlist}
                    playlistItems={playlistItems}
                />
            )}
        </ul>
    )
};

export default ChannelVideoList