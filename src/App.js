import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './containers/Header/Header';
import BedroomProduct from './Pages/BedroomProduct';
import Home from './Pages/Home';
import ShoppingBag from './Pages/ShoppingBag';
import SingleProduct from './Pages/SingleProduct';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    
    <Router>
       <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} exact/>
        <Route path='/brand/hm/bedroom' element={ <BedroomProduct/>}/>
        <Route path='/brand/hm/bedroom/duet-cover' element={ <SingleProduct/>}/>
        <Route path='/shopping-bag' element={ <ShoppingBag/>}/>
      </Routes>
      <Footer/>
   </Router>
  
  );
}

export default App;
