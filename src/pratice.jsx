// import React, { useState } from 'react'
// import products from './components/Product'

// function Pratice() {
//     let [items, setItems] = useState(products);

//     // Create a set to keep track of unique categories
//     let uniqueCategories = new Set();

//     // Filter the items to get only one item per category
//     let filteredItems = items.filter((item) => {
//         if (!uniqueCategories.has(item.category)) {
//             uniqueCategories.add(item.category);
//             return true;
//         }
//         return false;
//     });

//     return (
//         <div className='flex items-center justify-center flex-col h-screen mt-[200px]'>
//             <h1 className='text-black'>items</h1>
//             <div>
//                 <div className='grid grid-cols-4 gap-10'>
//                     {filteredItems.map((item) => {
//                         let { id, name, image } = item;
//                         return (
//                             <div key={id}>
//                                 <img className='w-16 h-16' src={image} alt='' />
//                                 <h1>{name}</h1>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pratice
