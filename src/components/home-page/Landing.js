import React from 'react';

import menuToggleIcon from '../../assets/icons/mobile-menu-toggle.svg';

import navigation from "../../assets/static/navigation";

const Landing = () => {
    return (
        <div className='bg-home-bg bg-right-top bg-cover xl:bg-center'>
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
        </div>
    );
};

export default Landing;
