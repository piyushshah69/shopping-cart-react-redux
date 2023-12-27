import { useDispatch } from "react-redux"
import { removeFromCart } from "../../store/slices/cartSlice"

const CartProductCard = ({ product }) => {

    const dispatch = useDispatch();

    const onRemoveClick = () => {
        dispatch(removeFromCart(product.id))
    }

  return (
    <div className="bg-white rounded-lg overflow-hidden flex gap-4 p-2 md:justify-between">
          <div className="w-[20%] md:w-[10%] flex items-center justify-center">
              <img className="h-[80px] md:h-[100px]" src={product?.image} />
          </div>
          <div className="w-[80%] flex flex-col justify-center gap-3 md:flex-row md:justify-between ">
              <div className="flex items-center md:w-[55%]">
                  <h2 className="text-lg">{product?.title}</h2>
              </div>
              <div className="flex items-center gap-2 md:w-[35%] md:justify-between md:mr-2">
                  <p className="text-xl">${product?.price * product?.cartValue} (x{product?.cartValue})</p>
                  <button className="text-lg py-1 px-3 border border-slate-800 rounded-md transition-all hover:bg-slate-800 hover:text-white"
                  onClick={onRemoveClick}>Remove</button>
              </div>
          </div>
    </div>
  )
}

export default CartProductCard