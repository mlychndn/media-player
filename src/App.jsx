import VideoPlayer from "./VideoPlayer";
import DashPlayer from "./DashPlayer";

const App = () => {
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
      },
    ],
  };

  const dashSource =
    "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";

  const handleVideoJsReady = (player) => {
    console.log("Video.js player is ready!", player);
  };

  const handleDashReady = (player) => {
    console.log("Dash.js player is ready!", player);
  };

  return (
    <div>
      <h1>React Video Players</h1>

      <h2>Video.js Player</h2>
      <VideoPlayer options={videoJsOptions} onReady={handleVideoJsReady} />

      <h2>Dash.js Player</h2>
      <DashPlayer source={dashSource} onReady={handleDashReady} />
    </div>
  );
};

export default App;
