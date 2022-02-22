import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Bar from './pages/Bar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Bar />
      </BrowserRouter>
    </>
  );
}

export default App;
