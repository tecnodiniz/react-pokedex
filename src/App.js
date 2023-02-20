
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Teste from './pages/test';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/teste/:name" element={<Teste/>}/>
          <Route exact path="/teste/" element={<Home/>}/>

        </Routes>

        

      </BrowserRouter>
  );
}

export default App;
