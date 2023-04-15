import { Link} from "react-router-dom";
import CartItem from "./Cards/CartItem";
import { clearShoppingCart, removeFromDb } from "../utils/fakedb";
import { useContext } from "react";
import { CartContext } from "../App";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cart,setCart]= useContext(CartContext)
  let totalPrice = 0
  for (const product of cart) {
    totalPrice=totalPrice+(product.price*product.quantity)
  }
    const handleRemoveCartItem = (id) => {
      // console.log(`handleRemoveCartItem`, id);
      const remaining = cart.filter(pd => pd.id !== id)
      toast.error('Product Removed ! 🔥')
      setCart(remaining)
      removeFromDb(id)
  }
  //delete shopping cart
  const handleClearCart = () => {
    if (cart.length > 0) {
      setCart([])
        clearShoppingCart()
        return toast.success('All Items Removed! 👍')
      }
      return toast.error('cart is empity! 🔥')
  }

  // place order
  const orderHandle = () => {
    if (cart.length > 0) {
    setCart([])
      clearShoppingCart()
      return toast.success('order done! 👍')
    }
    return toast.error('cart is empity! 🔥')
  }


  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900 ">
      {/* <h3 style={{textAlign:'center',color:'#2c3e50',fontSize:'24px'}}>This Is Our cart Components</h3> */}
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
      <h2 className="text-xl font-semibold capitalize">{cart.length ? 'review cart items' : 'cart is EMPTY!'}</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {cart.map(product=><CartItem key={product.id} product={product} handleRemoveCartItem={handleRemoveCartItem} />)}
        </ul>
        <div className="capitalize space-y-1 text-right">
          <p className="font-bold text-gray-500">toatal amount: ${totalPrice}</p>
          <p>not including taxes and shipping costs !</p>
        </div>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ?
            <button className="btn-outlined" onClick={()=>handleClearCart()}>Clear Cart</button> :
          <Link to="/shop" className="btn-outlined">Back To Shop</Link>
        }
          <button className="btn-primary" onClick={()=>orderHandle()}>Place Order</button>
        </div>
      </div>
      </div>
  );
};

export default Cart;