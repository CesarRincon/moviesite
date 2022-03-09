import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { FilmsDetails } from './pages/FilmsDetails';
import { LandingPage } from './pages/LandingPage';
import { Navbar } from './component/Navbar';
import { Slider } from './component/Slider/Slider';


function App() {
  return (
    <>
      <header>
        <Link to="/"><h1 className='title-logo'>Moviesite</h1></Link>
        <Navbar />
      </header>
      <Slider />
      <main>
        <Routes>
          <Route exact path="/" element={ <LandingPage />} />
          <Route path="/movies/:movieId" element={< FilmsDetails />} />
        </Routes>
      </main>
    </>

  );
}

export default App;
