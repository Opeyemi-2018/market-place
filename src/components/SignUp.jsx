import goggleLogo from '../assets/images/google-logo.png'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='bg-gray-50 pt-16 mt-[85px]'>
      <div className='md:max-w-[500px] max-w-[300px] mx-auto '>
        <div className=''>
          <div className='mb-8'>
            <h1 className='text-center font-bold md:text-3xl text-[18px] mb-1'>Create An Account</h1>
            <p className='text-[#555] text-center mb-3 md:text-[16px] '>Enter youfr email to sign up for this app</p>
          </div>

          {/* form */}
          <form className='flex flex-col  mt-4'>
            <input className='border border-gray-300 mb-4 md:p-[8px]  p-[7px] rounded-md shadow-md placeholder-gray-400 text-[12px]' type="text" placeholder='Enter email address' />
            <input className='border border-gray-300 mb-6 md:p-[8px] p-[7px] rounded-md mt shadow-md  placeholder-gray-400 text-[12px]' type="text" placeholder='Create a password' />
            <button className=' bg-orange-600 mt w-full  p-[6px] text-white rounded-md'>Submit</button>

            <div className='flex items-center  justify-center my-4'>
              <hr className='w-[38%] h-[40%] text-[#555]' />
              <p className='mx-1 whitespace-nowrap text-[#666]'>or continue with</p>
              <hr className='w-[38%] h-[40%] text-[#555]' />
            </div>
            {/* continue with google */}
            <button className=' border border-gray-300 bg-white rounded-md shadow-md p-[6px] flex items-center gap-3 justify-center'>
              <img className='md:w-[4%] w-[6%]' src={goggleLogo} alt="" />
              <h1>google</h1>
            </button>
            <p className='text-center my-4 text-[#666]'>Already have an account? <span className='text-[#333]'>Login</span></p>
          </form>
        </div>
      </div>
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
    </div>
  )
}

export default SignUp
