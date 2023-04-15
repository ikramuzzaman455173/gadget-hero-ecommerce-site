import React, { useContext } from 'react';
import ProductCard from './Cards/ProductCard';
import { addDb } from '../utils/fakedb';
import { CartContext, ProductContext } from '../App';
import { toast } from 'react-hot-toast';
const Shop = () => {
  const [cart,setCart]=useContext(CartContext)
  const handleAddToCart = (product) => {
    let newCart = []
    const exists = cart.find(existsProduct => existsProduct.id === product.id)
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest=cart.filter(existsProduct=>existsProduct!==product.id)
      exists.quantity = exists.quantity + 1
      newCart=[...rest,exists]
    }
    setCart(newCart)
    addDb(product.id)
    toast.success('Product Added ! 🛒')
  }
  const products = useContext(ProductContext)
  // console.log(`products`,products);

  return (
    <div className='product-container'>
      {products.map(product=><ProductCard product={product} key={product.id} handleAddToCart={handleAddToCart} />)}
    </div>
  );
};

export default Shop;