import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/portfolio' element={<Products />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
