import './Authors.scss';

const Authors = () => {
  return (
    <div className="line__city" style={{ height: '500px' }}>
      <div className="overflow__city" style={{ backgroundColor: '#09052FD9', height: '500px' }}>
        <div className="overflow__city" style={{ height: '500px' }}>
          <div className="authors__main">
            <div className="brackets__block">
              <img src="/assets/brackets.png" alt="brackets" />
            </div>
            <div className="authors__text">
              <p>
                This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
              </p>
            </div>
            <div className="authors__name">
              <span>Jane galadriel</span>
              <span style={{ fontSize: '13px', fontWeight: '300' }}>CEO TENGKUREP</span>
            </div>
            <div className="authors__block">
              <img src="/assets/authors/one.png" alt="authorsImg" />
              <img src="/assets/authors/two.png" alt="authorsImg" />
              <img src="/assets/authors/three.png" alt="authorsImg" />
              <img src="/assets/authors/fourth.png" alt="authorsImg" />
              <img src="/assets/authors/five.png" alt="authorsImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
