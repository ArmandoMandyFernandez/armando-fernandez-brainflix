import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json'
import { useState } from 'react';

function App() {

  const [selectedVideo, setSelectedVideo] = useState (videoDetails[0])

  const videoClick = (videoId) => {
    const foundVideo = videoDetails.find(video => video.id === videoId)
    setSelectedVideo(videoClick);
  }

  const filteredVideos = videos.filter(video => video.id !== selectedVideo.id)

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
