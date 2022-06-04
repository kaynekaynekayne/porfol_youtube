import React, { useEffect } from 'react';
import { useState } from 'react';
import './app.module.css';
import VideoList from './components/video_list/video_list';
function App() {

  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDtxM0gI2XN7x_07Ll7iQrwdt2VT84_eOQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);

  return (
    <div>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
