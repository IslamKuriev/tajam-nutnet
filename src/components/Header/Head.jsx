import './Head.scss';
const Head = () => {
  return (
    <div className="line__tree">
      <div className="overlay__tree" style={{ background: '#09052FD9' }}>
        <div className="overlay__tree">
          <div className="head__container">
            <div className="nav__container">
              <div className="logo__block">
                <img src="/assets/logo.png" alt="logo" />
                <span>tajam</span>
              </div>
              <ul>
                <li
                  onClick={() =>
                    scrollTo({
                      top: 1,
                      behavior: 'smooth',
                    })
                  }
                  style={{ color: '#00E0D0' }}>
                  home
                </li>
                <li
                  onClick={() =>
                    scrollTo({
                      top: 500,
                      behavior: 'smooth',
                    })
                  }>
                  about
                </li>
                <li
                  onClick={() =>
                    scrollTo({
                      top: 1660,
                      behavior: 'smooth',
                    })
                  }>
                  expertise
                </li>
                <li
                  onClick={() =>
                    scrollTo({
                      top: 2390,
                      behavior: 'smooth',
                    })
                  }>
                  Teams
                </li>
                <li
                  onClick={() =>
                    scrollTo({
                      top: 3040,
                      behavior: 'smooth',
                    })
                  }>
                  works
                </li>
                <li
                  onClick={() =>
                    scrollTo({
                      top: 3600,
                      behavior: 'smooth',
                    })
                  }>
                  People say
                </li>
                <li
                  onClick={() =>
                    scrollTo({
                      top: 4120,
                      behavior: 'smooth',
                    })
                  }>
                  contact
                </li>
              </ul>
            </div>
            <div className="head__info">
              <h2>We Are Awesome Creative Agency </h2>
              <div></div>
              <p>
                This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit.
              </p>
              <button>learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
