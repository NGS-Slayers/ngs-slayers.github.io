import { useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const playVideo = () => {
      if (isIntersectingRef.current && video.readyState >= 1) {
        video.play().catch(error => {
          console.error("Autoplay prevented for video:", src, error);
        });
      }
    };

    const handleMetadataLoaded = () => {
      playVideo();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.25,
      }
    );

    video.addEventListener('loadedmetadata', handleMetadataLoaded);
    observer.observe(video);

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadataLoaded);
      observer.disconnect();
      if (video) {
        video.pause();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={styles.video}
      src={src}
      loop
      muted
      playsInline
    />
  );
};

export default VideoPlayer;