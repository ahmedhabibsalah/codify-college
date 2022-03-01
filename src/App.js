import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Bar from './pages/Bar';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Bar />
        <Routes>          
          <Route element={<Home />} path="/" exact />
          <Route element={<Services />} path="/services"  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
