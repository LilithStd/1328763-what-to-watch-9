import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  isActive: boolean;
  src: string;
  muted: boolean;
  poster: string;
}

function VideoPlayer({isActive, src, muted, poster}: VideoPlayerProps)  {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null){
      isActive ? videoRef.current.play() : videoRef.current.pause();
      return () => {
        videoRef.current = null;
      };
    }
  });

  return(
    <video src={src}
      className="player__video"
      poster={poster}
      ref = {videoRef}
      muted={muted}
    />);
}

export {VideoPlayer};
