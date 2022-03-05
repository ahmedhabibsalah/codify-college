import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/Register';
import AboutPage from './pages/About';
import Bar from './pages/Bar';
import CareeresPage from './pages/CareeresPage';
import ContactPage from './pages/Contact';
import Home from './pages/Home';
import Register from './pages/Register';
import Services from './pages/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Bar />
        <Routes>          
          <Route element={<Home />} path="/" exact />
          <Route element={<Services />} path="/services"  />
          <Route element={<ContactPage />} path="/contact"  />
          <Route element={<AboutPage />} path="/about"  />
          <Route element={<CareeresPage />} path="/careers"  />
          <Route element={<Register />} path="/signIn" />
          <Route element={<SignUp />} path="/signUp" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
