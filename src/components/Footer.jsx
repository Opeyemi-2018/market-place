import { Link, NavLink } from "react-router-dom"



function Footer() {
    // let currentDate = new Date().getFullYear()
    return (
        <div className='bg-[#000] md:p-4 p-2  mt-[100px]'>
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
    )
}

export default Footer
