import React from 'react';

const VIDEOS = [
  { id: 'v1', src: '/videos/video1.mp4' },
  { id: 'v2', src: '/videos/video2.mp4' },
  { id: 'v3', src: '/videos/video3.mp4' },
  { id: 'v4', src: '/videos/video4.mp4' }
];

export default function VideoReelSection() {
  return (
    <section className="video-reel-section clean-reels">
      <div className="video-reel-container">
        <div className="video-reel-grid">
          {VIDEOS.map((vid) => (
            <div key={vid.id} className="video-card-frame clean-frame">
              <video
                src={vid.src}
                autoPlay
                muted
                loop
                playsInline
                className="video-element"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
