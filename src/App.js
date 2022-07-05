import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ItemListContainer />
        <Routes>
          <Route path="/productos/:productId" element={ <ItemDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
