import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Career from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignUp from './components/Register';
import SignIn from './components/SignIn';
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
          <Route element={<Contact />} path="/contact"  />
          <Route element={<About />} path="/about"  />
          <Route element={<Career />} path="/careers"  />
          <Route element={<SignIn />} path="/signIn" />
          <Route element={<SignUp />} path="/signUp" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
