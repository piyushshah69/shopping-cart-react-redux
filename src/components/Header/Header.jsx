import { Home, ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='bg-slate-800 py-4 w-full'>
            <div className='w-11/12 max-w-6xl m-auto flex items-center justify-between'>
                <Link to={'/'}>
                    <span className='text-white font-semibold text-2xl md:text-3xl'>ShoppingCart</span>
                </Link>
                <div className='flex gap-8 md:gap-16'>
                    <Link to={'/'}>
                        <span className='text-white'><Home /></span>
                    </Link>
                    <Link to={'/cart'}>
                        <span className='text-white'> <ShoppingCart /> </span>
                    </Link>
                </div>
            </div>
            
        </nav>
    )
}

export default Header