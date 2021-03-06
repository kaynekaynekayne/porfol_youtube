import React, { useState, useEffect } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css';
import ChannelVideoList from './components/channelVideo_list/channelVideo_list';


function App({youtube}) {

  const [videos,setVideos]=useState([]);
  const [playlists,setPlaylists]=useState([]);
  const [selectedVideo, setSelectedVideo]=useState(null);

  const onVideoClick=(video)=>{
    setSelectedVideo(video);
  }

  const getPlaylists=(channelId)=>{
    youtube
    .channelPlaylist(channelId)
    .then(items=>{
      (items.length===0 && alert("이 채널의 재생목록 없음"))
      setPlaylists(items);
      setSelectedVideo(null);
    })
  }

  const playlistItems=(playlistId)=>{
    youtube
    .playlistItems(playlistId)
    .then(videos=>{
      setVideos(videos);
      setPlaylists([]);
    })
  }

  const search=query=>{
    youtube
      .search(query)
      .then(videos=>{
        setVideos(videos);
        setSelectedVideo(null);
        setPlaylists([]);
    })
  }

  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos=>{
        setVideos(videos);
        setPlaylists([]);
      })
  },[youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
               <VideoDetail 
                  video={selectedVideo}
                  getPlaylists={getPlaylists}  
              />
            </div>
          )
          }
        <div className={styles.list}>

          {playlists.length!==0 ?
            <ChannelVideoList 
              playlists={playlists}
              playlistItems={playlistItems} 
            />
          : 
            <VideoList 
              videos={videos} 
              onVideoClick={onVideoClick}
              display={selectedVideo ? 'list' : 'grid'}
            />
          }
        </div>
      </section>
    </div>
  );
}

export default App;
