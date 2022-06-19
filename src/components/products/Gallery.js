import React from 'react';

const Gallery = ({products}) => {
    return (
        <div className='flex flex-row flex-wrap items-center justify-center'>
            {
                products.length > 0 ?
                    products.map((product, index) => {
                        const price = product.priceInfo.currentPrice !== null ? product.priceInfo.currentPrice.price : '100';
                        return (
                            <div key={index} className='mr-1 mb-5 last:mr-0 xl:mr-5 xl:last:mr-0'>
                                <div>
                                    <div className='py-2 px-2 border border-gray-300 rounded-2xl'>
                                        <div className='flex justify-center'>
                                            <img src={product.imageInfo.thumbnailUrl} alt='product' className='w-[140px] xl:w-[240px]' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h2 className='text-[#23262F] font-semibold text-[18px]'>{product.name.split(' ').slice(0,3).join(' ')}</h2>
                                        <div className='flex items-center w-2/6 xl:w-1/5 justify-between'>
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
    );
};

export default Gallery;
