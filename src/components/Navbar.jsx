
import { IoClose } from "react-icons/io5";
import { FaBars } from 'react-icons/fa';
import { IoCart } from "react-icons/io5";
import { NavLink, Outlet, Link } from "react-router-dom"
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md"

function Navbar({ nav, setNav, cartCount, setCartCount, carts, setCart, setSearch }) {

    let handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className="md:bg-[#000] bg-[#000] w-full z-30 pb-1 fixed top-0  ">
                <div className="text-white   border-b border-[#fff] max-w-[1250px]  mt-4   h-16 md:px-3 px-2 mx-auto flex justify-between items-center">
                    <NavLink to={'/'} className="md:basis-1/4 basis-1/2 text-orange-600 animate-pulse inline md:text-3xl text-2xl font-extrabold">XX99</NavLink>
                    <nav className="hidden md:flex">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'activeStyle mr-10  hover:text-[#737e80] ease-in-out duration-500' : 'mr-10  hover:text-[#737e80] ease-in-out duration-500'}>HOME</NavLink>
                        <NavLink to={'/AllProduct'} className={({ isActive }) => isActive ? 'activeStyle mr-10  hover:text-[#737e80] ease-in-out duration-500' : 'mr-10  hover:text-[#737e80] ease-in-out duration-500'}>PRODUCTS</NavLink>
                    </nav>

                    <div>
                        <NavLink to={'/signup'} className={({ isActive }) => isActive ? 'act  md:text-[13px] sl:text-1xl' : ' text-[#fff] font-medium  md:text-[13px] sl:text-1xl'}>
                            <MdAccountCircle className='sm:text-3xl text-2xl' />  </NavLink>
                    </div>

                    <NavLink to={'/cart'} className={({ isActive }) => isActive ? 'relative activeStyle hover:text-[#737e80] ease-in-out duration-500' : 'relative'}>
                        <div className='relative'>
                            <p className='absolute md:left-4 left-3 md:bottom-4 bottom-2 border border-white text-[#fff] bg-[#0c1012] p-3 rounded-full h-full w-full  flex items-center justify-center whitespace-wrap'>{carts.length}</p>
                            <IoCart className='md:text-[40px] text-[20px] ease-in-out duration-500' />
                        </div>
                    </NavLink>
                    <div onClick={handleNav} className="block md:hidden  ">
                        {nav ? <IoClose size={25} /> : <FaBars size={25} />}
                    </div>

                    <div className={nav ? "fixed z-50  md:hidden top-0 left-0 h-full w-[60%] border-r border-gray-900 bg-[#000] ease-in-out duration-500" : 'fixed left-[-100%]'}>
                        <h1 className="w-[50%] text-orange-600 animate-pulse m-5 text-2xl font-extrabold">XX99</h1>
                        <nav className="">
                            <NavLink onClick={handleNav} to={'.'} className='block m-5 border-b border-gray-900'>HOME</NavLink>
                            <NavLink onClick={handleNav} to={'/AllProduct'} className='block m-5 border-b border-gray-900'>PRODUCTS</NavLink>
                        </nav>

                        <div className="m-5">
                            <NavLink onClick={handleNav} to={'/cart'} className='w-40 bg-[#fff] text-[#000] flex justify-between items-center font-medium py-[2px] px-2 rounded-sm text-sm'>Check Order <IoCart className='text-[#000]'></IoCart > </NavLink>
                        </div>

                    </div>

                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar
