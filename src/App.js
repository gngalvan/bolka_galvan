import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:productId" element={ <ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
