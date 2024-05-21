import { useState } from 'react';
import AllProducts from './Product';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdSad } from "react-icons/io";

function AllProduct() {
    let [search, setSearch] = useState('');
    let [products, setMyProducts] = useState(AllProducts);

    const filteredProducts = products.filter((product) =>
        search.trim().toLowerCase() === '' ? product : product.name.toLowerCase().includes(search.trim())
    );

    return (
        <section>
            <div className='mt-[83px] p-2 fixed top-0 z-20 w-full bg-[#000]'>
                <div className='max-w-[2000px] md:px-0 px-1 md:max-w-[1250px] mx-auto flex items-center justify-center'>
                    <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='search for product' className="w-full  outline-none bg-[#fff] rounded-md py-1 px-3" type="text" />
                </div>
            </div>
            <div className="py-1 mt-[140px] fixed top-[-2%] bg-[#000] z-20 w-full">
                <div className="max-w-[1250px] md:px-0 px-2 mx-auto">
                    <Link to='..' relative="path"><FaArrowLeft className='text-[#fff] md:text-[25px]  text-[20px] inline ' /></Link>
                </div>
            </div>
            <div className=''>
                {filteredProducts.length === 0 && (
                    <div className="flex items-center justify-center flex-col mt-[250px] ">
                        <IoMdSad size={50} />
                        <h1 className='text-gray-600 md:text-3xl text-2xl'>No item found!!!</h1>
                    </div>
                )}
                <div className='grid  grid-cols-3 gap-2 md:grid-cols-6  md:px-5 px-2   md:mt-[210px] mt-[170px] max-w-[1250px] mx-auto'>
                    {filteredProducts.map((product) => {
                        let { id, image, name, price } = product;

                        return (
                            <div key={id}>
                                <Link to={id}>
                                    <div style={{}} className='flex flex-col mb-4 md:px-4 px-2 shadow-md hover:shadow-lg ease-in-out duration-500  border-gray-200 border border-r-1 border-l-0 border-b-0 border-t-0 hover:scale-105'>
                                        <div className='flex items-center justify-center h-[80px] md:h-[100px]'>
                                            <img className='max-w-[100%] max-h-[100%]' src={image} alt="" />
                                        </div>

                                        <div className='md:mt-7 mt-1 flex flex-col items-center'>
                                            <div className='flex gap-4 items-center justify-between'>
                                                <h1 className='text-[#000300] whitespace-nowrap md:text-[17px] text-[13px] font-semibold md:font-bolder'>{name}</h1>
                                                <h1 className='md:text-[16px] text-[13px] font-semibold md:font-bold text-gray-700' >${price}</h1>
                                            </div>
                                            <div className='flex items-center justify-center gap-4 mt-1'>
                                                <p className='text-gray-700 md:text-sm text-[10px]'>SHOP</p>
                                                <IoIosArrowForward className='text-orange-600'></IoIosArrowForward >
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AllProduct;
