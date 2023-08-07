// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar componentes
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';  
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/products" element={<Products />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        
        <Route path="/profile" element={<Profile />} />
      
      </Routes>
    </BrowserRouter>
  );

}

export default App;

