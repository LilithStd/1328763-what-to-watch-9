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
    const video = videoRef.current;
    const timeout = setTimeout(() => {
      if (isActive && video !== null) {
        video.play();
      }
    }, TIMER);

    return () => {
      clearTimeout(timeout);
      if(video) {
        video.load();
      }
    };
  }, [isActive]);

  return(
    <video src={src}
      className="player__video"
      poster={poster}
      ref = {videoRef}
      muted={muted}
    />);
}

export {VideoPlayer};
