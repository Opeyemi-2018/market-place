
function HomeSearch({ search, setSearch }) {
    return (
        <div>
            <div className='max-w-[2000px] md:max-w-[1250px] mt-4 mx-auto'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search for product' className="w-full outline-none bg-[#fff] rounded-md py-1 px-3" type="text" />
            </div>
        </div>
    )
}

export default HomeSearch
