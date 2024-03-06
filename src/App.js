import Container from 'react-bootstrap/Container';
import './App.css';
import axios from 'axios';
import Navbarr from './Header.js/Navbar';
import Button from 'react-bootstrap/Button';
import { useState, createContext } from 'react';
import About from './Header.js/About';
import { Redirect, Switch, Route ,Link} from 'react-router-dom';
import Home from './Header.js/Home';
import Contact from './Header.js/Contact';
import ProductDetails from './Header.js/ProductDetails';
import { useContext } from 'react';
import AuthForm from './Header.js/AuthForm';
import AuthContext, { AuthContextProvider } from './store/authcontext';

export const Gloablinfo = createContext(AuthContextProvider);

function App() {
  
  const authctx = useContext(AuthContext);
  !authctx.isLoggedIn ? console.log('No NO') : console.log('Its login'+authctx.newEmail);
  
  const [add, setadd] = useState([]);
  const [token, settoken] = useState(0);

  const addhandler = async(product) => {
    const isProductAdded = add.some((item) => item.title === product.title);

    if (isProductAdded) {
      alert('Product is Already Added!');
    } else {
      let newToken = token + 1;
      settoken(newToken++);

      const obj = {
        email: authctx.newEmail,
        product: { ...product, key: token },
      };
      const emailid=authctx.newEmail;
      const indexOfAt = emailid.indexOf('@');
const substringResult = emailid.slice(0 ,indexOfAt);
console.log(substringResult)

      console.log('Step: Before Axios Request', obj,emailid);
      
      try {
        // Use async/await for better error handling
        await axios.post(`https://crudcrud.com/api/fbed444f7efb438683f1a809489495ed/cart${substringResult}`, obj);
      
        // Assuming you want to update the local state with the new product
        setadd((prev) => [...prev, { ...product, key: token }]);
        console.log('Response from server:');
        console.log('Done');
      } catch (error) {
        console.error('Error adding product to the cart:', error.message);
        alert('Error adding product to the cart. Please try again.');
      }
      
    }
  };

  const removehandler = (key) => {
    let newtoken = token - 1;
    settoken(newtoken);
    setadd((prev) => prev.filter((item) => item.key !== key));
  };

  const productsArr = [
    {
      productId: 'p1',
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      productId: 'p2',
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      productId: 'p3',
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      productId: 'p4',
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <>
      <Gloablinfo.Provider value={{ add: add, removehandler: removehandler, token: token }}>
        
          <Navbarr />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={AuthForm} />
            <Route path="/contact" exact component={Contact} />
            <Route
              path="/store"
              exact
              render={() =>
                authctx.isLoggedIn ? (
                  <Container className="custom-container">
                    <div className="products-container">
                      {productsArr.map((product, index) => (
                        <div key={index} className="product-item">
                          <Link to={`/${product.productId}`}>
                            <img src={product.imageUrl} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <Button variant="info" onClick={() => addhandler(product)}>
                              Add To Cart
                            </Button>{' '}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Container>
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route path="/:productID" exact render={(props) => <ProductDetails {...props} productsArr={productsArr} />} />
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Gloablinfo.Provider>
    </>
  );
}

export default App;
