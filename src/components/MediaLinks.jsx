
/**
 * MediaLinks is a React component that renders a list of social media links.
 *
 * @component
 * @returns {JSX.Element} The rendered MediaLinks component
 */
import React from 'react'

function MediaLinks() {
  return (
    <div className="flex justify-center space-x-4">
      <a href="https://twitter.com" className="text-white">Twitter</a>
      <a href="https://facebook.com" className="text-white">Facebook</a>
      <a href="https://instagram.com" className="text-white">Instagram</a>
      <a href="https://tiktok.com" className="text-white">TikTok</a>
      <a href="https://linkedin.com" className="text-white">LinkedIn</a>
    </div>
  )
}

export default MediaLinks