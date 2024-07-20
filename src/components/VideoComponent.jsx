/**
 * @file VideoComponent.jsx
 * @module VideoComponent
 * @desc React component for displaying a video element with a Blurhash placeholder.
 * The video auto-plays, loops, and is muted by default, with inline playback controls.
 * It also has an optional blur animation that starts after a delay of 1 second 
 * once the video has loaded and plays over 2 seconds.
 * 
 * @component VideoComponent
 * 
 * @requires react
 * @requires react-blurhash
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://github.com/woltapp/react-blurhash|React Blurhash Documentation}
 * 
 * @param {string} className - The class name for the video element.
 * @param {string} src - The source URL of the video.
 * @param {string} blurHash - The Blurhash string for the video placeholder.
 * @param {boolean} useBlurFade - Whether to apply the blur fade animation.
 * 
 *  @see https://github.com/woltapp/react-blurhash
 * @see https://reactjs.org/docs/getting-started.html
 * 
 * @returns {JSX.Element} The rendered VideoComponent.
 * 
 * @example
 * // Example usage of VideoComponent
 * <VideoComponent 
 *   className="custom-class" 
 *   src="https://example.com/video.mp4" 
 *   blurHash="L%O:@Sj[~qj[%Mj[offQt7fQIUay"
 *   useBlurFade={true}
 * />
 * 
 * @example
 * // Example usage without blur fade animation
 * <VideoComponent 
 *   className="custom-class" 
 *   src="https://example.com/video.mp4" 
 *   blurHash="L%O:@Sj[~qj[%Mj[offQt7fQIUay"
 * />
 * 
 * @exports VideoComponent
 * 
 * @author Chace Nielson
 * @created 2024-07-14
 * @updated 2024-07-19
 */
import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import '../styles/VideoComponent.css';

const VideoComponent = ({ className, src, blurHash = 'L%O:@Sj[~qj[%Mj[offQt7fQIUay', useBlurFade = false }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [startBlurAnimation, setStartBlurAnimation] = useState(false);

  useEffect(() => {
    if (videoLoaded && useBlurFade) {
      const timer = setTimeout(() => {
        setStartBlurAnimation(true);
      }, 1000); // 1 second delay
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [videoLoaded, useBlurFade]);

  return (
    <div className="relative w-full h-full">
      {!videoLoaded && (
        <Blurhash
          hash={blurHash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
      <video
        onCanPlay={() => setVideoLoaded(true)}
        className={`${className} ${videoLoaded ? 'opacity-100' : 'opacity-0'} ${startBlurAnimation ? 'blur-animation' : ''} transition-opacity duration-500 w-full h-full object-cover`}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{ filter: videoLoaded ? (useBlurFade ? 'blur(0)' : 'blur(0)') : 'blur(2px)' }} // Apply initial blur
      />
    </div>
  );
};

export default VideoComponent;
