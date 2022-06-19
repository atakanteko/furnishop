import React, {useEffect, useState} from 'react';

import getProducts from "../../utils/httpService";

const Products = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getPaginationData = () => {
          getProducts(pageNumber).then(data => {
              console.log(data);
            setProducts(data.data.search.searchResult.itemStacks[0].items.slice(0, 8));
          })
        }
        getPaginationData();
    }, [pageNumber]);
    return (
        <div className='px-6 xl:px-[200px] flex items-center justify-center '>
            <div className='flex flex-col items-center'>
                <div className='text-center w-4/5 xl:w-2/3 mb-7 xl:mb-11 flex flex-col items-center'>
                    <h2 className='mb-2 text-[#23262F] font-semibold text-[24px] xl:text-[40px]'>All Products</h2>
                    <span className='block text-[#23262F] font-normal text-[14px] xl:text-[16px] xl:w-2/5'>The products we provide only for you as our service are selected from the best products with number 1 quality in the world</span>
                </div>
                {
                    <div className='flex flex-row flex-wrap items-center justify-center'>
                        {
                            products.length > 0 ?
                                products.map(product => {
                                    const price = product.priceInfo.currentPrice !== null ? product.priceInfo.currentPrice.price : '100';
                                    return (
                                        <div className='mr-1 mb-5 last:mr-0 xl:mr-5 xl:last:mr-0 xl:mb-12'>
                                            <div>
                                                <div className='py-2 px-2 border border-gray-300 rounded-2xl'>
                                                    <div className='flex justify-center'>
                                                        <img src={product.imageInfo.thumbnailUrl} alt='product' className='w-[140px] xl:w-[290px]' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h2 className='text-[#23262F] font-semibold text-[18px]'>Ceiling Light</h2>
                                                    <div className='flex items-center w-2/6 justify-between'>
                                                        <span className='text-[#23262F] font-normal text-[14px]'>${price}</span>
                                                        <span className='text-[#23262F] font-normal text-[12px] line-through'>$50</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : <></>
                        }
                    </div>
                }


                <div className='text-center'>
                    Pagination
                </div>
            </div>
        </div>
    );
};

export default Products;
