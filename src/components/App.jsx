import Head from './Header/Head';
import '../app.scss';
import OurStory from './Main/OurStory/OurStory';
import WatchStory from './Main/WatchStory/WatchStory';
import Expertise from './Main/Expertise/Expertise';
import MeetTeam from './Main/MeetTeam/MeetTeam';
import OurWorks from './Main/OurWorks/OurWorks';
import Authors from './Main/Authors/Authors';
import Connection from './Main/Connection/Connection';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <Head />
      <OurStory />
      <WatchStory />
      <Expertise />
      <MeetTeam />
      <OurWorks />
      <Authors />
      <Connection />
      <Footer />
    </div>
  );
}

export default App;
