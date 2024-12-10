import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Video.js default styles

const VideoPlayer = ({ options, onReady }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize Video.js player
    if (videoRef.current && !playerRef.current) {
      const player = videojs(videoRef.current, options, () => {
        onReady && onReady(player);
      });
      playerRef.current = player;
    }
  }, [options, onReady]);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js" />
      </div>
    </div>
  );
};

export default VideoPlayer;
