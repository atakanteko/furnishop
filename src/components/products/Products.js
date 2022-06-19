import React, {useEffect, useState} from 'react';

import Gallery from "./Gallery";

import getProducts from "../../utils/httpService";

import leftArrow from '../../assets/icons/arrow-left.svg';
import leftArrowOp from '../../assets/icons/arrow-left-opacity.svg';
import rightArrow from '../../assets/icons/arrow-right.svg';
import rightArrowOp from '../../assets/icons/arrow-right-opacity.svg';

import paginationBalls from "../../assets/static/paginationBalls";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getPaginationData = () => {
          setIsLoading(true);
          getProducts(currentPage).then(data => {
            setProducts(data.data.search.searchResult.itemStacks[0].items.slice(0, 8));
            setIsLoading(false);
          })
        }
        getPaginationData();
    }, [currentPage]);

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
    }

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    }

    return (
        <div className=' px-6 xl:px-[260px] flex items-center justify-center my-9'>
            <div className='flex flex-col items-center'>
                <div className='text-center w-4/5 xl:w-2/3 mb-7 xl:mb-11 flex flex-col items-center'>
                    <h2 className='mb-2 text-[#23262F] font-semibold text-[24px] xl:text-[40px]'>All Products</h2>
                    <span className='block text-[#23262F] font-normal text-[14px] xl:text-[16px] xl:w-2/5'>The products we provide only for you as our service are selected from the best products with number 1 quality in the world</span>
                </div>
                <Gallery products={products} />

                <div className='flex flex-row items-center justify-center'>
                    <div
                        onClick={goToPreviousPage}
                        className={`cursor-pointer rounded-full flex items-center justify-center shadow bg-white rounded-md py-2 px-3 text-[12px] leading-4 ${(currentPage === 1 || isLoading) ? 'disabled pointer-events-none cursor-not-allowed':''}`}>
                        <img src={`${(currentPage===1 || isLoading) ? leftArrowOp : leftArrow}`} alt='left arrow' className='w-4 h-4' />
                    </div>
                    <div className='mx-4 flex flex-row justify-center items-center'>
                        {
                            paginationBalls.map(item => {
                                return (
                                    <div key={item.id} className={`w-[10px] h-[10px] ${currentPage===item.id ? 'bg-black' : ''} border border-black rounded-full mr-2`}></div>
                                )
                            })
                        }
                    </div>
                    <div
                        onClick={goToNextPage}
                        className={`bg-orange-400 cursor-pointer rounded-full flex items-center justify-center shadow bg-white rounded-md py-2 px-3 text-[12px] leading-4 ${(products.length === 0 || currentPage === 5 || isLoading) ? 'disabled pointer-events-none cursor-not-allowed':''}}`}>
                        <img src={`${(products.length === 0|| currentPage === 5 || isLoading) ? rightArrowOp : rightArrow}`} alt='right arrow' className='w-4 h-4' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
