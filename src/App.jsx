import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Categories from './Pages/Catergories';
import './App.css'
import Contact from './Pages/Contact';

// import OffcanvasExample from './Component/OffcanvasExample';

function App() {
  return (
    
      <div>
        {/* <OffcanvasExample /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contant" element={<Contact />} />
        </Routes>
      </div>
    
  );
}

export default App;
