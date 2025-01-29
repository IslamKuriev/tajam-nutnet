import { useState } from 'react';
import './WatchStory.scss';

const WatchStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="line__city">
      <div
        className="overflow__city"
        style={!open ? { backgroundColor: '#09052FD9' } : { opacity: '100%' }}>
        <div className="overflow__city">
          <div className="watchStory__container">
            <div className="videoImage__block" onClick={() => setOpen(!open)}>
              <img src="/assets/frameVideo.png" alt="Video" />
              <h4>Watch our story</h4>
            </div>
            <div className="iframe">
              {open && (
                <>
                  <iframe
                    width="850"
                    height="485"
                    src="https://rutube.ru/play/embed/f884aa6ed5f94120b7304506042fe5bb/"
                    frameBorder="0"
                    allow="clipboard-write; autoplay"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen></iframe>
                  <button onClick={() => setOpen(false)}>Close</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WatchStory;
