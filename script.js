document.addEventListener("DOMContentLoaded", function() {
  const backgroundVideo = document.getElementById("background-video");

  // YouTube Video ID
  const videoId = "YOUR_YOUTUBE_VIDEO_ID";

  // YouTube Video URL
  const videoUrl = "https://youtu.be/IshQFFwW30U?si=wXEbw95FfO8mnQui" + videoId + "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + videoId;

  // Create iframe element for YouTube video
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", videoUrl);
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "true");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.position = "fixed";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.zIndex = "-1";

  // Append the iframe to the background video container
  backgroundVideo.appendChild(iframe);
});
