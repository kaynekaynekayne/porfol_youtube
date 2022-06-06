import React, { useState, useEffect } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css';


function App({youtube}) {

  const [videos,setVideos]=useState([]);
  const [selectedVideo, setSelectedVideo]=useState(null);
  const [plId,setPlId]=useState("");


  const selectVideo=(video)=>{
    setSelectedVideo(video);
  }

  const getChannelVideos=(channelId)=>{
    youtube
    .channelPlaylist(channelId)
    .then(videos=>{
      videos.map(video=>setPlId(video.id))
    })
    .then(()=>playlistItems(plId))
  }

  const playlistItems=(plId)=>{
    youtube
    .playlistItems(plId)
    .then(items=>{
      setVideos(items);
      setSelectedVideo(null);
      setPlId("");
    })
  }

  const search=query=>{
    youtube
      .search(query)
      .then(videos=>{
        setVideos(videos);
        setSelectedVideo(null);
    })
  }


  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos=>setVideos(videos))
  },[youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
               <VideoDetail 
                video={selectedVideo}
                getChannelVideos={getChannelVideos}  
              />
            </div>
          )
          }
        <div className={styles.list}>
          <VideoList 
            videos={videos} 
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
            />
        </div>
      </section>
    </div>
  );
}

export default App;
