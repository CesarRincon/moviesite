import './App.css';
import { Route, Routes } from 'react-router-dom';
import { FilmsDetails } from './pages/FilmsDetails';
import { LandingPage } from './pages/LandingPage';
import { Navbar } from './component/Navbar';



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/movies/:movieId" element={< FilmsDetails />} />
        </Routes>
      </main>
    </>

  );
}

export default App;
