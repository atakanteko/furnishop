import React from 'react';

import menuToggleIcon from '../../assets/icons/mobile-menu-toggle.svg';

import navigation from "../../assets/static/navigation";

const Landing = () => {
    return (
        <div className='bg-home-bg h-screen bg-right bg-cover flex flex-col xl:bg-center'>
            <div className='flex flex-row items-center justify-between px-[25px] pt-[37px] leading-none xl:px-[130px] xl:pt-[40px]'>
                <h2 className='font-semibold text-[24px] text-white xl:font-bold xl:text-[36px]'>FurniShop</h2>
                <div className='xl:hidden lg:hidden md:hidden'>
                    <img src={menuToggleIcon} alt="menu toggle" width={24} height={24}/>
                </div>
                <div className='hidden xl:block lg:block md:block'>
                    <ul className='flex flex-row items-center justify-between w-[402px]'>
                        {
                            navigation.map((item) => {
                                return(
                                    <li key={item.id} className='first:font-semibold font-normal text-[16px] text-white tracking-wide'>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='text-center px-12 flex flex-col items-center justify-center'>
                <h2 className='mt-28 font-semibold w-3/4 leading-none tracking-wide text-[24px]  text-white xl:font-bold xl:text-[64px] xl:w-5/12'>
                    Creative Home Simpify Your Furniture
                </h2>
                <div className='my-6 flex items-center justify-center xl:mb-14'>
                    <span className='block font-semibold tracking-wide text-[14px] text-white xl:font-normal xl:text-[20px] xl:w-7/12'>
                        Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto
                    </span>
                </div>
                <div className='bg-[#e2e2e266] w-fit py-[9px] px-[35px] rounded-md xl:py-4 xl:px-20'>
                    <span className='font-semibold text-white text-[14px] xl:text-[20px]'>Shop Now</span>
                </div>


            </div>
            <div className='bg-[#286F6C] mx-[25px] mt-64 py-10 px-14 rounded-xl xl:flex xl:flex-row xl:items-center  xl:px-[111px] xl:mx-[100px] xl:mt-[420px]'>
                <div className='flex flex-row justify-between items-center xl:justify-between xl:w-2/5'>
                    <div className='w-2/5 text-center xl:flex xl:flex-col xl:items-center'>
                        <h2 className='font-semibold text-[24px] text-white xl:text-[40px]'>7</h2>
                        <span className='block font-normal text-white text-[14px] xl:text-[20px]'>Year <br/>Experience</span>
                    </div>
                    <div className='w-1/5 h-[60px] w-[1px] bg-white xl:h-[100px]'></div>
                    <div className='w-2/5 text-center xl:flex xl:flex-col xl:items-center'>
                        <h2 className='font-semibold text-[24px] text-white xl:text-[40px]'>2</h2>
                        <span className='block font-normal text-white text-[14px] xl:text-[20px] xl:w-2/3'>Opened in the country</span>
                    </div>

                </div>
                <div className='text-center hidden xl:block xl:w-1/5 xl:flex xl:items-center xl:justify-center'>
                    <div className='h-[100px] w-[1px] bg-white'></div>
                </div>
                <div className='flex flex-row justify-between items-center mt-16 xl:mt-0 xl:w-2/5'>
                    <div className='w-2/5 text-center xl:flex xl:flex-col xl:items-center'>
                        <h2 className='font-semibold text-[24px] text-white xl:text-[40px]'>10k+</h2>
                        <span className='block font-normal text-white text-[14px] xl:text-[20px] xl:w-1/3'>Furniture sold</span>
                    </div>
                    <div className='w-1/5 h-[60px] w-[1px] bg-white xl:h-[100px]'></div>
                    <div className='w-2/5 text-center xl:flex xl:flex-col xl:items-center'>
                        <h2 className='font-semibold text-[24px] text-white xl:text-[40px]'>260+</h2>
                        <span className='block font-normal text-white text-[14px] xl:text-[20px] xl:w-1/3'>Variant Furniture</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
