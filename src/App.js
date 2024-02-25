import Container from 'react-bootstrap/Container';
import './App.css';
import Navbarr from './Header.js/Navbar';
import Button from 'react-bootstrap/Button';
function App() {
  
    
const productsArr = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ]
  
  
  return (
  <>
  
  <Navbarr />
      <Container className="custom-container">
        
        <div className="products-container">
          {productsArr.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.imageUrl} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <Button variant="info">Add To Cart</Button>{' '}  
            </div>
          ))}
        </div>
      </Container>


</>
  );
}

export default App;
