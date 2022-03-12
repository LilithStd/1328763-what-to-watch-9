import {useEffect, useRef} from 'react';
import {TIMER}  from '../../const';

type VideoPlayerProps = {
  isActive: boolean;
  src: string;
  muted: boolean;
  poster: string;
}

function VideoPlayer({isActive,src, muted, poster}: VideoPlayerProps)  {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoCurrent = videoRef.current;
    const timeout = setTimeout(() => {
      if (isActive && videoCurrent !== null) {
        videoCurrent.play();
      }
    }, TIMER);
    return () => {
      if (isActive && videoCurrent) {
        videoCurrent.src = src;
      }
      clearTimeout(timeout);
    };
  }, [isActive, src]);

  return(
    <video src={src}
      className="player__video"
      poster={poster}
      ref = {videoRef}
      muted={muted}
    />);
}

export {VideoPlayer};
