import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Landing from './Components/Landing/Landing'
import Facility from './Components/Facility/Facility'
import PopularMenu from './Components/PopularMenu/PopularMenu'
import Gallery from './Components/Gallery/Gallery'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Landing />
      <Facility />
      <PopularMenu />
      <Gallery />
    </div>
  );
}

export default App;
