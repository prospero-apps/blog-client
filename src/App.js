import './style.css'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import PostPage from './components/PostPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Private from './components/Private'
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Private/>}>
            <Route path='/' element={<HomePage />}/>
            <Route path='/protected' element={<Protected/>}/>
            <Route path='/posts/:id' element={<PostPage/>}/>
          </Route>          
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
