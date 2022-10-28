import './style.css'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
