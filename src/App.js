import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Layout from './pages/layout/Layout';
import Timeline from './pages/timeline/Timeline';
import Biblio from './pages/biblio/Biblio.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route  path="timeline" element={<Timeline />} />
          <Route path="bibliography" element= {<Biblio /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
