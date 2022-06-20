import { Route, Routes } from 'react-router-dom';
import './App.css';
import Empnav from './Components/for employers/empnav';
import JobRecomandation from './Components/JobsRecomndation/JobRecomandation';

import LandingNavbar from './Components/LandingPage/LandingNavbar';
import Landingslider1 from './Components/LandingPage/Landingslider1';

// use StyleSheet.module for css

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingNavbar/>}></Route>
      <Route path='/employer' element={<Empnav/>}></Route>
    </Routes>
    {/* <LandingNavbar/> */}
    {/* <Empnav/> */}
    {/* <Landingslider1/> */}
    
    </>
  );
}

export default App;
