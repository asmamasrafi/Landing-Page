import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="background-color overflow-hidden">
    <Navbar />
    <div className="gradient-03 z-0" />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Insights />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
     
      <div className="gradient-04 z-0" />
    
    </div>
    <Footer />
  </div>
);

export default Home;
