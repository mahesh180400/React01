import { useParams } from 'react-router-dom';

const ProductDetails = ({ productsArr }) => {
  const { productID } = useParams();
  console.log(productID)

  // Find the product with the matching productId
  const selectedProduct = productsArr.find(product => product.productId === productID);

  return (
    <div>
      <h1>Product Details</h1>
      {selectedProduct ? (
        <>
          <img src={selectedProduct.imageUrl} alt={selectedProduct.title} />
          <h3>{selectedProduct.title}</h3>
          <p>${selectedProduct.price}</p>
          {/* Add other product details here */}
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
