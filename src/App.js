import Container from 'react-bootstrap/Container';
import './App.css';
import Navbarr from './Header.js/Navbar';
import Button from 'react-bootstrap/Button';
import { useState,createContext } from 'react';
import About from './Header.js/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Header.js/Home';
import Contact from './Header.js/Contact';
import ProductDetails from './Header.js/ProductDetails';
import { Link} from 'react-router-dom';
export const Gloablinfo=createContext();


function App() {
const [add,setadd]=useState([]);
const [token,settoken]=useState(0)
const addhandler=(product)=>{
  const isproduct=add.some((item)=>item.title===product.title);
  if(isproduct){
    alert("Product is Already Added!")
  }else{
  let newtoken=token+1
  settoken(newtoken++)
  setadd((prev) => [...prev, { ...product, key: token}]);
  }
}
;
const removehandler=(key)=>{
  let newtoken=token-1
  settoken(newtoken)
  setadd((prev) => prev.filter((item) => item.key !== key));
}
    
const productsArr = [

  {
  productId:'p1',

  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
    productId:'p2',
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
    productId:'p3',
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
    productId:'p4',
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ]
  
  
  return (
  <>
  <Gloablinfo.Provider value={{add:add,removehandler:removehandler,token:token}}> 
  <Router>
          <Navbarr />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={ <Container className="custom-container">
                       <div className="products-container">
                      {productsArr.map((product, index) => (
                      <div key={index} className="product-item">
                     <Link to={`/store/${product.productId}`}>
                      <img src={product.imageUrl} alt={product.title} />
                      <h3>{product.title}</h3>
                      <p>${product.price}</p>
                      <Button variant="info" onClick={()=>addhandler(product)}>Add To Cart</Button>{' '}  
                      </Link>
                      </div>
                          ))} </div>
                      </Container>} />
           <Route path="" element={<Home />} />
           <Route path="/store/:productID" element={<ProductDetails productsArr={productsArr}/>} />
            </Routes>
        </Router>
     
      </Gloablinfo.Provider>


</>
  );
}

export default App;
