import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import PageNotFound from "./components/PageNotFound/PageNotFound"

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home></Home>}></Route>
            <Route path='/movie/:imbdID' element={<MovieDetail></MovieDetail>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
