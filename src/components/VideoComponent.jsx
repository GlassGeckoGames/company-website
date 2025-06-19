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

const VideoComponent = ({ className, src, blurHash = 'L%O:@Sj[~qj[%Mj[offQt7fQIUay', useBlurFade = false }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [startBlurAnimation, setStartBlurAnimation] = useState(false);
  
  const fadeDelay = 4500; // Duration of the fade animation in milliseconds

  useEffect(() => {
    if (videoLoaded && useBlurFade) {
      const timer = setTimeout(() => {
        setStartBlurAnimation(true);
      }, fadeDelay); // Delay before blur + img overlay

      return () => clearTimeout(timer);
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

    <img 
      src={process.env.PUBLIC_URL + '/art/LCD_background_1.png'} 
      alt=""
      className={`
        absolute top-0 left-0 w-full h-full object-contain pointer-events-none 
        transition-opacity duration-[2000ms] z-50 
        ${startBlurAnimation ? 'opacity-15' : 'opacity-0'}
      `}
    />

    <div className='bg-black absolute top-0 left-0 w-full h-full z-0 pointer-events-none'/>

      <video
        onCanPlay={() => setVideoLoaded(true)}
        className={`
          ${className}
           w-full h-full object-cover z-40 
          transition-all duration-[3000ms] ease-in-out 
          ${startBlurAnimation ? 'blur-[1px] opacity-80' : 'blur-none opacity-100'}
        `}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controlsList="nodownload nofullscreen noremoteplayback"
      />
    </div>
  );
};

export default VideoComponent;
