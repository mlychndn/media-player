import { useEffect, useRef } from "react";
import dashjs from "dashjs";

const DashPlayer = ({ source, onReady }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let player;

    if (videoRef.current) {
      player = dashjs.MediaPlayer().create();
      player.initialize(videoRef.current, source, true);

      if (onReady) {
        onReady(player);
      }
    }

    // Cleanup player instance on component unmount
    return () => {
      if (player) {
        player.reset();
      }
    };
  }, [source, onReady]);

  return (
    <div>
      <video ref={videoRef} controls width="100%" />
    </div>
  );
};

export default DashPlayer;
