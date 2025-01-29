import './Expertise.scss';

const Expertise = () => {
  return (
    <div className="expertise__container">
      <div className="expertise__info">
        <h2>expertise</h2>
        <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
        <div></div>
      </div>
      <div className="expertise__description">
        <div className="description__block">
          <div>
            <div className="img__desc">
              <img src="/src/assets/computer.png" alt="computer" />
            </div>
            <br />
            <h3>WEB DESIGN & DEVELOPMENT</h3>
            <p>
              This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet
              Aenean.
            </p>
          </div>
          <div>
            {' '}
            <div className="img__desc">
              <img src="/src/assets/tassel.png" alt="tasel" />
            </div>
            <br />
            <h3>BRANDING IDENTITY</h3>
            <p>
              This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet
              Aenean.
            </p>
          </div>
          <div>
            {' '}
            <div className="img__desc">
              <img src="/src/assets/phone.png" alt="phone" />
            </div>
            <br />
            <h3>MOBILE APP</h3>
            <p>
              This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet
              Aenean.
            </p>
          </div>
        </div>
        <div className="description__block">
          <div>
            {' '}
            <div className="img__desc">
              <img src="/src/assets/block.png" alt="block" />
            </div>
            <br />
            <h3>SEARCH ENGINE OPTIMIZATION</h3>
            <p>
              This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet
              Aenean.
            </p>
          </div>
          <div>
            {' '}
            <div className="img__desc">
              <img src="/src/assets/prefix.png" alt="prefix" />
            </div>
            <br />
            <h3>GAME DEVELOPMENT</h3>
            <p>
              This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet
              Aenean.
            </p>
          </div>
          <div>
            {' '}
            <div className="img__desc">
              <img src="/src/assets/heart.png" alt="heart" />
            </div>
            <br />
            <h3>MADE WITH LOVE</h3>
            <p>
              This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet
              Aenean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
