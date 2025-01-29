import './MeetTeam.scss';

const MeetTeam = () => {
  return (
    <div className="line__tree">
      <div className="overlay__tree" style={{ backgroundColor: '#311D5ED9' }}>
        <div className="overlay__tree">
          <div className="meetTeam__container">
            <div className="meetTeam__info">
              <h3>MEET OUR AMAZING TEAM</h3>
              <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
              <div></div>
            </div>
            <div className="meetTeam__cards">
              <div className="meetTeam__card">
                <div className="background__block"></div>
                <div>
                  <span>Semf ucuk</span>
                  <span style={{ fontWeight: '300' }}>CEO & FOUNDER</span>
                </div>
              </div>
              <div className="meetTeam__card">
                <div className="background__block"></div>
                <div>
                  <span>DIK ADALIN</span>
                  <span style={{ fontWeight: '300' }}>ENGINEERING</span>
                </div>
              </div>
              <div className="meetTeam__card">
                <div className="background__block"></div>
                <div>
                  <span>JENG KOL</span>
                  <span style={{ fontWeight: '300' }}>DESIGNER</span>
                </div>
              </div>
              <div className="meetTeam__card">
                <div className="background__block"></div>
                <div>
                  <span>PET ROMAK</span>
                  <span style={{ fontWeight: '300' }}>MARKETING</span>
                </div>
              </div>
            </div>
            <div className="hiring__block">
              <span>Become part of our dream team, let’s join us ! </span>
              <button>we are hiring</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
