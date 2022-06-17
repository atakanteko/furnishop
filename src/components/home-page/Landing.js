import React from 'react';

import menuToggleIcon from '../../assets/icons/mobile-menu-toggle.svg';

import navigation from "../../assets/static/navigation";

const Landing = () => {
    return (
        <div className='bg-home-bg h-screen bg-right bg-cover py-[37px] flex flex-col justify-between xl:bg-center xl:py-0'>
            <div className='flex flex-row items-center justify-between px-[25px] leading-none xl:px-[130px] xl:pt-[40px]'>
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
            <div className='text-center px-12 flex flex-col items-center justify-center '>
                <h2 className='mt-28 font-semibold  leading-none tracking-wide text-[46px] text-white xl:font-bold xl:text-[64px] xl:w-5/12'>
                    Creative Home Simpify Your Furniture
                </h2>
                <div className='my-6 flex items-center justify-center xl:mb-14 xl:mt-16'>
                    <span className='block font-semibold tracking-wide text-[18px] text-white xl:font-normal xl:text-[20px] xl:w-7/12'>
                        Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto
                    </span>
                </div>
                <div className='bg-[#e2e2e266] w-fit py-[9px] px-[35px] rounded-md xl:py-4 xl:px-20'>
                    <span className='font-semibold text-white text-[16px] xl:text-[20px]'>Shop Now</span>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Landing;
