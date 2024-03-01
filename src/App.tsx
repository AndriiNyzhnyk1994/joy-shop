import { Route, Routes } from 'react-router-dom';
import './App.css'
import ItemsList from './Components/ItemsList/ItemsList';
import Cart from './Pages/Cart/Cart';
import MainLayout from './layouts/MainLayout';
import FullItem from './Pages/FullItem/FullItem';
import ErrorBlock from './Components/Error/Error';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<ItemsList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/element/:id/*' element={<FullItem />} />
        <Route path="*" element={<ErrorBlock/>}/>
      </Route>
    </Routes>

  );
}

export default App;
