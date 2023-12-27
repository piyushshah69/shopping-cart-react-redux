import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import CartProductCard from "../components/CartProductCard/CartProductCard";

const Cart = () => {

  const cart = useSelector(state => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((acc, curr) => acc + (curr.price * curr.cartValue), 0);
    setTotalAmount(amount)
    if (cart.length > 0) {
      const products = cart.reduce((acc, curr) => acc + curr.cartValue, 0)
      setTotalProducts(products);
    }
  }, [cart])

  return (
    <div className="bg-slate-800 w-11/12 my-10 max-w-4xl m-auto rounded-lg p-5">
      
      {cart.length === 0 ?
        <h1 className="text-2xl text-white">Cart is currently empty...</h1> :
        <>
          <h1 className="text-white text-3xl md:text-4xl">Cart -</h1>
          <hr className="my-6" />
          <div className="flex flex-col gap-2">
            {cart.map(product => {
              return <div key={product.id} >
                <CartProductCard product={product} />
              </div>
            })}
          </div>
          <hr className="my-6" />
          <h2 className="text-white text-2xl md:text-3xl">Total Amount - ${totalAmount.toFixed(2)}</h2>
      </>}

    </div>
  )
}

export default Cart