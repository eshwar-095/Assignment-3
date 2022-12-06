
import './App.css';
import store from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Provider} from 'react-redux'
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <NavBar></NavBar>
          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/cart' element={<Cart></Cart>}></Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
