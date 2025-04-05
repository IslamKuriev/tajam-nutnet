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
                    width="720"
                    height="405"
                    src="https://rutube.ru/play/embed/9f9ff0b35e342852bfb7be951e0da837"
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
