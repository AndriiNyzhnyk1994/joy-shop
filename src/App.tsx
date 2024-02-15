import './App.css'
import Header from './Header/Header';

function App() {


  return (
    <>
     <Header/>
     <main>
      <div className='container'>
        <div className='items'>
          <ul className='itemsList'>
            <li className="item">
              <img src="https://m.media-amazon.com/images/I/61dV+aYlNmL._SX679_.jpg" alt="IMAGE" />
              
            </li>
          </ul>
        </div>
      </div>
     </main>
    </>
  );
}

export default App;
