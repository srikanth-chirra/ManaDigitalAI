import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Healthcare from './pages/Healthcare';
import RealEstate from './pages/RealEstate';
import ITTraining from './pages/ITTraining';
import OtherBusinesses from './pages/OtherBusinesses';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="healthcare" element={<Healthcare />} />
          <Route path="real-estate" element={<RealEstate />} />
          <Route path="it-training" element={<ITTraining />} />
          <Route path="other-businesses" element={<OtherBusinesses />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
