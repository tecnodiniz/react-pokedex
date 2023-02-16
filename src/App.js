
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Teste from './pages/test';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/" exact/>
          <Route element={<Teste/>} path="/teste"/>

        </Routes>

        

      </BrowserRouter>
  );
}

export default App;
