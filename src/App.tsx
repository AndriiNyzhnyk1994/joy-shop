import './App.css'
//import ItemsList from './Components/ItemsList/ItemsList';
import Header from './Header/Header';
import Cart from './Pages/Cart/Cart';

const App: React.FC = () => {
  return (
    <>
      <Header />
          {/* <ItemsList /> */}
        <Cart/>
    </>
  );
}

export default App;
