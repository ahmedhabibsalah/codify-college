import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Bar from './pages/Bar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Bar />
        <Routes>
          
          <Route element={<Home />} path="/" exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
