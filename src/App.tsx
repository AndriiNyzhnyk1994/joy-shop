import './App.css'
import Item from './Components/Item/Item';
import ItemsList from './Components/ItemsList/ItemsList';
import Header from './Header/Header';

const App = () => {


  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <ItemsList />
        </div>
      </main>
    </>
  );
}

export default App;
