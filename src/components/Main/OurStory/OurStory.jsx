import './OurStory.scss';
const OurStory = () => {
  return (
    <div className="ourStory__container">
      <div className="ourStory__logo">
        <img src="/assets/logoOurStory.png" alt="Logo" />
      </div>
      <div className="ourStory__info">
        <h2>Our Story</h2>
        <p>
          This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus <br /> <br />
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
          mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default OurStory;
