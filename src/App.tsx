import { Route, Routes } from 'react-router-dom';
import './App.css'
import ItemsList from './Components/ItemsList/ItemsList';
import Cart from './Pages/Cart/Cart';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<ItemsList />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>

  );
}

export default App;
