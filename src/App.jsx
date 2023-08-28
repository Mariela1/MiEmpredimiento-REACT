import './App.css';
import ItemListContainer from './components/ItemListContainer/index';
import NavBar from './components/NavBar/index';
import Cart from './components/Cart/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
          <Routes>
            <Route  path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
            <Route path="/cart" element={< Cart/>}/>
          </Routes>
    
    </BrowserRouter>
    
 
     
    </>
  );
}

export default App;
