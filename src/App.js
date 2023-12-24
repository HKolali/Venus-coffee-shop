import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Landing from './Components/Landing/Landing'
import Facility from './Components/Facility/Facility'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Landing />
      <Facility />
    </div>
  );
}

export default App;
