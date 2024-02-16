import './App.css'
import Item from './Components/Item/Item';
import ItemsList from './Components/ItemsList/ItemsList';
import Header from './Header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      
          <ItemsList />
        
    </>
  );
}

export default App;
