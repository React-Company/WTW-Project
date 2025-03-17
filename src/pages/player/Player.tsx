import {Link, useLoaderData} from 'react-router-dom';
import { FilmData } from '../../api/types/types';
import {useRef, useState} from 'react';

export default function Player () {
  const { filmData }: FilmData = useLoaderData() as FilmData;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [videoDuration, setVideoDuration] = useState('');
  const [progress, setProgress] = useState(0);

  const togglerClass = {
    left: `${progress}%`,
  };

  const formatVideoDuration = (durationInSeconds: number) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);

    const formatNumber = (num: number) => String(num).padStart(2, '0');

    if (hours > 0) {
      return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
    }
    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;
  };

  const playVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (fullScreen) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
    setFullScreen(!fullScreen);
  };

  const loadDuration = () => {
    if (videoRef.current) {
      setVideoDuration(formatVideoDuration(videoRef.current.duration));
    }
  };

  const progressChanged = () => {
    if (videoRef.current) {
      setProgress(Number((videoRef.current.currentTime / videoRef.current.duration * 100).toFixed(1)));
    }
  };

  return (
    <div className="player">
      <video ref={videoRef} src={filmData.videoLink} className="player__video" onClick={playVideo} onLoadedData={loadDuration} onTimeUpdate={progressChanged}></video>

      <Link to={`/films/${filmData.id}`} type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={togglerClass}>Toggler</div>
          </div>
          <div className="player__time-value">{videoDuration}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={playVideo}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{filmData.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
