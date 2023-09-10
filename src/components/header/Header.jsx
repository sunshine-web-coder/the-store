import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Header() {
    const cart = useSelector((state) => state.cart);
    const itemCount = cart.length;

  return (
    <div className='border p-5 pl-0 pr-0 shadow-sm'>
    <div className='custom_container flex items-center justify-between'>
        <Link to="/">
            <div className='text-2xl font-bold'>
                fakeStore
            </div>
        </Link>
        <nav className='hidden sm:block'>
            <ul className='flex items-center gap-5 text-lg font-normal'>
                <li><Link to="">Home</Link></li>
                <li><Link to="">Shop</Link></li>
                <li><Link to="">Support</Link></li>
            </ul>
        </nav>
        <div className='flex gap-10 items-center pr-4 sm:p-0'>
            <Link to="/cart" className='relative'>
                <ShoppingCartOutlined className="text-2xl" />
                <div className='border p-2 w-5 text-xs font-bold shadow-sm h-5 bg-black text-white absolute left-4 bottom-3 rounded-full flex items-center justify-center'>
                    {itemCount} 
                </div>
            </Link>
            <div className='hidden sm:block'>
                <Link to="" className='border p-2 pl-4 text-sm pr-4 bg-[#2A3038] shadow-sm text-white block text-center rounded'>Login</Link>
            </div>
        </div>
    </div>
    </div>
  )
}
