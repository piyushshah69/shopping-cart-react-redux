import { Add, Done, Remove } from '@mui/icons-material';
import { Rating } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';


const ProductCard = ({ product }) => {
    const cart = useSelector(state => state.cart);

    const [cartValue, setCartValue] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    const dispatch = useDispatch();

    const getCart = [...cart]

    useEffect(() => {
        getCart.forEach((prod) => {
            if (prod.id === product.id) {
                setIsAdded(true);
            }
        })
    }, []);

    const handleItemAdd = () => {
        if (cartValue < 10) {
            setCartValue(cartValue + 1)
        } else (
            alert('Item limit reached!')
        )
    }

    const handleItemRemove = () => {
        if (cartValue > 0) {
            setCartValue(cartValue - 1)
        } else (
            alert('Already empty!')
        )
    }

    const handleAddClick = () => {
        if (cartValue === 0) {
            alert('Please select quantity!!')
        } else {
            product.cartValue = cartValue;
            dispatch(addToCart(product))
            setIsAdded(true)
            setCartValue(0)
        }
    }

    return (
        <div className='border border-slate-200 shadow-md rounded-2xl p-12 md:p-6 flex flex-col gap-4 justify-between cursor-pointer'>
            <div className='flex justify-center items-center h-[300px] md:h-[260px]'>
                <img className='h-full' src={product?.image} />
            </div>
            <div className='flex flex-col items-start'>
                <h2 className='capitalize text-lg mb-2'>{product?.title}</h2>
                <p className='text-sm capitalize text-gray-950 bg-slate-300 px-2 py-0.5 rounded'>{product?.category}</p>
                <p className='text-slate-800 my-2 text-xl md:text-2xl'>${product?.price}</p>
                <p className='flex gap-2 items-center'><Rating color='' readOnly defaultValue={product.rating.rate} precision={0.5} />({product.rating.count})</p>
            </div>
            <div className='flex gap-4'>
                {isAdded ? null :
                    <div className='flex gap-4 items-center'>
                        <button className='py-1 px-3 border border-slate-800 rounded-md transition-all hover:bg-slate-800 hover:text-white'
                            onClick={handleItemRemove}><Remove /></button>
                        <p className='text-2xl'>{cartValue}</p>
                        <button className='py-1 px-3 border border-slate-800 rounded-md transition-all hover:bg-slate-800 hover:text-white'
                            onClick={handleItemAdd}><Add /></button>
                    </div>}
                {isAdded ?
                    <button className='text-lg py-1 px-3 flex gap-2 items-center'> Added <Done />
                    </button> :
                    <button className='text-lg py-1 px-3 border border-slate-800 rounded-md transition-all hover:bg-slate-800 hover:text-white'
                        onClick={handleAddClick}>Add to cart
                    </button>}
            </div>
        </div>
    )
}

export default ProductCard