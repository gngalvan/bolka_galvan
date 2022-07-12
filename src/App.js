import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={ <ItemListContainer />}/>
          <Route path="/item/:productId" element={ <ItemDetailContainer />}/>
          <Route path="/cart" element={ <ItemCount />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
