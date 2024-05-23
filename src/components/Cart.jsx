import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { PiWarningCircleLight } from "react-icons/pi"
function Cart({ carts, setCart }) {
    let [deleteMsg, setDeleteMsg] = useState(false)
    let [notification, setNotification] = useState(false)
    let [pay, setPay] = useState(false)
    let showNotification = (id) => {
        setTimeout(() => {
            setDeleteMsg(deleteMsg)
        }, 3000)
        let selectedProduct = carts.filter((cart) => cart.id !== id)
        setCart(selectedProduct)
    }

    let handleNotification = () => {
        setNotification(!notification)
    }

    let removeAllCart = () => {
        setNotification(!notification)
        setDeleteMsg(!deleteMsg)
        setTimeout(() => {
            setDeleteMsg(deleteMsg)
        }, 3000)
        setCart([])
    }

    let cancel = () => {
        setNotification(!notification)
    }

    const increaseQuantity = (id) => { // Function to increase the quantity of a cart item
        const updatedCart = carts.map((cartItem) => { // Map through the current items in the cart
            if (cartItem.id === id) { // Check if the current item matches the provided id
                // Increase quantity by 1
                return { ...cartItem, itemQuantity: cartItem.itemQuantity + 1 }; // Update quantity and return the updated item
            }
            return cartItem; // Return the item unchanged if the id doesn't match
        });
        setCart(updatedCart); // Update the cart state with the updated items
    };


    // Function to decrease the quantity of a cart item
    const decreaseQuantity = (id) => { // Function to decrease the quantity of a cart item
        const updatedCart = carts.map((cartItem) => { // Map through the current items in the cart
            if (cartItem.id === id && cartItem.itemQuantity > 1) { // Check if the item matches the id and its quantity is greater than 1
                // Decrease quantity by 1, but ensure it doesn't go below 1
                return { ...cartItem, itemQuantity: cartItem.itemQuantity - 1 }; // Update quantity and return the updated item
            }
            return cartItem; // Return the item unchanged if the id doesn't match or quantity is already 1
        });
        setCart(updatedCart); // Update the cart state with the updated items
    };

    const [showPassword, setShowPassword] = useState(false);
    const handlePassword = () => {
        setShowPassword(!showPassword); // Toggle the state variable
    };

    let handlePayment = (e) => {
        e.preventDefault()
    }

    return (

        <div className="bg-gray-50">
            {notification && (<div className="bg-gray-200 p-4 md:w-[40%] w-[80%] rounded-md fixed transform -translate-x-1/2 -translate-y-1/2 md:top-[50%] top-[40%] left-[50%]">
                <div className="flex items-center text-center justify-center flex-col">
                    <div><PiWarningCircleLight className="text-[#b72522]" size={40} /></div>
                    <div className="my-3 md:text-[20px] text-[15px]">Are you sure you want to remove all  items</div>
                    <div className="flex justify-between items-center gap-8 mt-2">
                        <div>
                            <button onClick={removeAllCart} className="bg-[#b72522] text-white hover:bg-red-500 py-1 md:px-2 px-2 rounded-md ease-in-out duration-500 ">Yes i'm sure</button>
                        </div>
                        <div>
                            <button onClick={cancel} className=" bg-white md:py-1 py-[3px] md:px-2 px-2 rounded-md ease-in-out duration-500 hover:bg-slate-200 ">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>)}
            {deleteMsg && (
                <div className="bg-red-400 top-0 ease-in-out duration-500 z-30 md:p-4 p-2 w-full text-white font-medium fixed">
                    <p className="text-center md:text-[14px] text-[12px]">ALL PRODUCT SUCCESSFULLY  REMOVED</p>
                </div>
            )}
            {/* <div className={showSignUp ? 'bg-gray-100 blur filter blur-[5px] brightness-[0.7]' : 'bg-gray-100'}> */}
            <div className="py-2 md:mt-[140px] mt-[145px] fixed top-[-10%] bg-[#000] z-20 w-full">
                <div className="max-w-[1250px] md:px-5 px-2 mx-auto">
                    <Link to='..' relative="path"><FaArrowLeft className='text-[#fff] md:text-[25px] text-[20px] inline ' /></Link>
                </div>
            </div>

            {carts.length === 0 ?
                <div className="flex items-center  justify-center  pt-2 h-screen">
                    <div>
                        <div className="bg-white rounded-full md:h-40 md:w-40 w-20 h-20  mx-auto flex items-center justify-center p-4">
                            <IoCart className='md:text-[80px] text-[50px]  text-[#000] animate-spin' />
                        </div>
                        <h1 className="text-[17px] text-center md:text-[22px]">Your cart is empty!!!!</h1>
                        <p className="text-[17px] text-center md:text-[22px]">Browse our category and discover our best deals!</p>
                        <Link to={'/Allproduct'}><button className='animate-bounce bg-orange-600 rounded-sm my-4 w-full md:p-2 p-1 text-[#fff] text-[15px] md:text-[18px]'>START SHOPPING</button> </Link>

                    </div>
                </div>
                :
                <div className="md:mt-[110px] mt-[118px] pt-5 rel ">
                    <div className='max-w-[1250px] md:px-5 px-2 mx-auto'>
                        <div className="flex md:flex-row flex-col flex-col-reverse gap-4 justify-between">
                            {pay && <div className="bg-white w-full  md:p-8  p-4">
                                <h1 className="md:text-xl md:font-medium  font-normal">CHECKOUT</h1>

                                <form onSubmit={handlePayment}>
                                    <div className="my-[20px]">
                                        <h2 className="text-[#000] md:font-semibold font-medium">BILLING DETAILS</h2>
                                        <div className="grid gap-2 md:grid-cols-2">
                                            <div>
                                                <label>Name</label>
                                                <input className="border border-gray-400 w-full rounded-sm  outline-none" type="text" />
                                            </div>
                                            <div>
                                                <label>Email Address</label>
                                                <input className="border border-gray-400 w-full rounded-sm outline-none" type="email" />
                                            </div>
                                            <div>
                                                <label>Phone Number</label>
                                                <input className="border border-gray-400 w-full rounded-sm outline-none" type="number" />
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <h2 className="text-[#000] md:font-semibold font-medium">SHIPPING INFO</h2>
                                        <div className="grid gap-2 md:grid-cols-2">
                                            <div className="col-span-2">
                                                <label>Address</label>
                                                <input className="border px-2 border-gray-400 w-full rounded-sm  outline-none" type="text" />
                                            </div>
                                            <div>
                                                <label>Zip Code</label>
                                                <input className="border px-2 border-gray-400 w-full rounded-sm outline-none" type="number" />
                                            </div>
                                            <div>
                                                <label>City</label>
                                                <input className="border px-2 border-gray-400 w-full rounded-sm outline-none" type="text" />
                                            </div>
                                            <div>
                                                <label>Country</label>
                                                <input className="border px-2 border-gray-400 w-full rounded-sm outline-none" type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-[20px]">
                                        <h2 className="text-[#000] md:font-semibold font-medium">PAYMENT DETAILS</h2>
                                        <h3 className="py-1">payment method</h3>
                                        <div className="flex justify-between gap-4  items-center">
                                            <button className="border border-[#b72522] md:py-[2px] py-[1px] rounded-md  px-4 flex gap-4 items-center justify-between  font-semibold text-gray-700 w-full whitespace-nowrap md:text-[18px] text-[14px]"> e-Money
                                                <input className="form-radio  h-5 w-5 accent-orange-700" name="radio-buttons" type="radio" />
                                            </button>
                                            <button className="border  border-[#b72522] md:py-[2px] py-[1px] rounded-md  px-4 flex  gap-3 items-center justify-between  font-semibold text-gray-700 w-full whitespace-nowrap md:text-[18px] text-[14px]"> cash on delivery
                                                <input className="form-radio h-5 w-5 accent-orange-700" name="radio-buttons" type="radio" />
                                            </button>
                                        </div>

                                        <div className="md:flex md:flex-row flex-col justify-between gap-2 items-center mt-3">
                                            <div>
                                                <label>e-money number</label>
                                                <input type="number" className="border border-gray-400 px-2 w-full rounded-sm outline-none" />
                                            </div>
                                            <div>
                                                <label>e-money-pin</label>
                                                <div className="relative">
                                                    <input
                                                        type={showPassword ? 'text' : 'password'} // Use conditional rendering based on the state variable
                                                        className="border  border-gray-400 px-2 w-full rounded-sm outline-none"
                                                    />
                                                    {showPassword ? (
                                                        <FaEye onClick={handlePassword} className="absolute top-[20%] left-[85%]" />
                                                    ) : (
                                                        <FaEyeSlash onClick={handlePassword} className="absolute top-[20%] left-[85%]" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button style={{ letterSpacing: '2px' }} className="bg-orange-600 w-full  mt-4  text-white text-2xl rounded-md">send</button>
                                </form>
                            </div>}

                            <div className={pay ? "w-full mx-auto " : "w-full md:w-[700px] mx-auto"}>
                                <h1 className="md:text-xl md:font-medium  font-normal">SUMMARY</h1>
                                {carts.map((cart) => {
                                    let { id, image, name, price, itemQuantity } = cart;
                                    return (
                                        <div key={id} className="bg-white shadow-md px-2 py-1 rounded-md mb-2">
                                            <div className='flex my-5 justify-between items-center'>
                                                <div>
                                                    <div className="flex gap-4">
                                                        <img className='p-2 rounded-md object-cover   md:w-[20%] w-20' src={image} alt={name} />
                                                        <div>
                                                            <h1 className="font-medium md:text-[14px] text-[11px]">{name}</h1>
                                                            <h1 className="font-medium text-gray-500">$ {price}</h1>
                                                            <div className="flex gap-6 items-center mt-2">
                                                                <button onClick={() => decreaseQuantity(cart.id)} className="bg-gray-200 py-[3px] px-[6px] text-[12px] rounded-sm text-[#192123]"><FaMinus /></button>
                                                                <button onClick={() => increaseQuantity(cart.id)} className="bg-gray-200 py-[3px] px-[6px] text-[12px] rounded-sm text-[#192123]"><FaPlus /></button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div>
                                                    <p className="font-semibold  text-gray-600">X{itemQuantity}</p>
                                                    <button onClick={() => showNotification(id)} className="md:text-[12px] text-[11px] rounded-sm cursor-pointer  hover:bg-red-100 hover:text-[#b72522] ease-in-out duration-500 flex p-[3px] justify-center p-[px] font-semibold gap-1 text-[#b72522]">
                                                        <RiDeleteBin6Line className='' size={18} />REMOVE</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })}
                                {carts.length > 1 ?
                                    <div className="flex items-center justify-end mt-2 mb-1">
                                        <button onClick={handleNotification} className="ease-in-out duration-500  bg-[#b72522] hover:bg-red-600 w-32 text-white p-1 rounded-sm text-[11px] font-normal md:font-medium">Remove All</button>
                                    </div>
                                    :
                                    <div></div>
                                }

                                {!pay && <button onClick={() => setPay(!pay)} className="rounded-sm bg-orange-600 text-white font-normal mt-2 md:font-medium w-full p-2 text-[13px]">CONTINUE & PAY</button>}
                            </div>
                        </div>
                    </div>

                </div>
            }

            {/* footer */}
            <div className='bg-[#000] md:p-4 p-2  mt-[200px]'>
                <div className='text-white max-w-[2000px] md:max-w-[1250px] md:px-0 px-2 mx-auto'>

                    <h1 className="md:block flex items-center justify-center font-bold mb-2 md:text-[20px] text-[#adbdbc] text-[18px]">XX99</h1>
                    <div className="flex md:flex-row flex-col-reverse flex-col  justify-between">
                        <div className="basis-1/2 text-[#737e80] md:block flex items-center justify-center flex-col">
                            <p className="py-4 text-[14px] md:text-[18px]">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Harum eos officia impedit atque mollitia at
                                accusamus architecto quos blanditiis est?
                            </p>
                            <p>copyright &copy; {new Date().getFullYear()}</p>
                        </div>

                        <div className="md:block flex items-center justify-center">
                            <nav className="text-[14px] text-[#adbdbc] md:text-[16px] ">
                                <Link to={'/.'} className='md:mx-7 mx-3' >HOME</Link>
                                <Link to={'/AllProduct'} className='md:mx-7 mx-3'>PRODUCTS</Link>
                                <Link className='md:mx-7 mx-3'>ABOUT</Link>
                                <Link className='md:mx-7 mx-3'>CONTACT</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
