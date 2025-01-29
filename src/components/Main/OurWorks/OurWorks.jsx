import './OurWorks.scss';

const OurWorks = () => {
  return (
    <div className="ourWorks__container">
      <div className="ourWorks__head">
        <h3>our works</h3>
        <div>
          <span>See All Project in dribbble</span>
          <img src="/assets/bracket.png" alt="bracket" />
        </div>
      </div>
      <div className="ourWorks__main">
        <img src="/assets/worksMain.png" alt="worksMain" />
      </div>
      <div className="ourWorks__foot">
        <button>learn more</button>
      </div>
    </div>
  );
};

export default OurWorks;
