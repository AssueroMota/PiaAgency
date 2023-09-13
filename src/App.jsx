import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
// import Video from './components/Video/Video';
import Offers from './components/Offers/Offers';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import CoreAbout from './components/pages/About/CoreAbout/CoreAbout';



const App = () => {
  return(
    <>
      <Header />
      <Banner />
      {/* <Video /> */}
      <Offers />
      <CoreAbout/>
      <Projects />
      <Footer />  
    </> 
  )
}

export default App;