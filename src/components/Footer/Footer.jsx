import './Footer.scss';
const Footer = () => {
  return (
    <div className="desctop__line">
      <div className="desctop__overlay">
        <div className="desctop__overlay" style={{ backgroundColor: '#09052FD9' }}>
          <div className="footer__container">
            <div className="navigation__block">
              <div className="logoFoot__block">
                <img src="src/assets/logo.png" alt="logo" />
                <span>tajam</span>
              </div>
              <p>
                lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit.
                Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit
              </p>
              <div className="nav">
                <div>help</div>
                <div>TERMS & CONDITION</div>
                <div>privacy</div>
              </div>
            </div>
            <div className="adress__block">
              <h4>Our studio</h4>
              <div className="location__desc">
                <img src="/src/assets/footer/location.png" alt="location" />
                <p>
                  Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480
                  - Indonesia
                </p>
              </div>
              <div className="phone">
                <img src="/src/assets/footer/call.png" alt="call" />
                (+62) 21-2224 3333
              </div>
            </div>
            <div className="social__network__block">
              <h4>stay in touch</h4>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div>
                  <input type="text" placeholder="Subscribe our newsletter" />{' '}
                </div>
                <button>
                  <img src="/src/assets/footer/airplane.png" alt="airplane" />
                </button>
              </div>
              <div className="social_network">
                <div>
                  <img src="/src/assets/footer/facebook.png" alt="facebook" />
                </div>
                <div>
                  <img src="/src/assets/footer/twitter.png" alt="twitter" />
                </div>
                <div>
                  <img src="/src/assets/footer/social.png" alt="social" />
                </div>
                <div>
                  <img src="/src/assets/footer/instagram.png" alt="instagram" />
                </div>
                <div>
                  <img src="/src/assets/footer/google.png" alt="google" />
                </div>
                <div>
                  <img src="/src/assets/footer/youtube.png" alt="youtube" />
                </div>
              </div>
              <span>Copyright © 2015 - Tajem Creative</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
