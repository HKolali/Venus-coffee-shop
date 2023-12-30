import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Landing from './Components/Landing/Landing'
import Facility from './Components/Facility/Facility'
import PopularMenu from './Components/PopularMenu/PopularMenu'
import Gallery from './Components/Gallery/Gallery'
import Team from './Components/Team/Team'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Landing />
      <Facility />
      <PopularMenu />
      <Gallery />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
