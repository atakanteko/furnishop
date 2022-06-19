import React from 'react';
import information from "../../assets/static/information";
import checkList from "../../assets/icons/checklist.svg";
import infoImage from "../../assets/images/information-image.jpg";

const Services = () => {
    return (
        <div className='py-11 px-6 xl:flex xl:flex-row xl:justify-evenly xl:px-[100px] xl:py-20'>
            <div className='xl:order-2 xl:w-[457px] xl:self-center'>
                <div>
                    <div className='text-left'>
                        <h2 className='font-semibold text-[24px] text-[#23262F] capitalize xl:text-[40px] xl:w-[357px] leading-[50px]'>We Create your home more aestetic</h2>
                        <span className='block text-left text-[14px] text-[#23262F] xl:text-[20px] xl:my-8'>Furniture power is a software as services for multipurpose business management system</span>
                    </div>
                    {
                        information.map(item => {
                            return (
                                <div key={item.id} className='flex flex-row items-start mt-4'>
                                    <div className='mr-4'>
                                        <img src={checkList} alt='check-list' className='w-6'/>
                                    </div>
                                    <div className=''>
                                        <h2 className='text-[16px] font-semibold text-[#23262F] xl:text-[20px]'>{item.title}</h2>
                                        <span className='text-[14px] font-normal text-[#23262F] xl:text-[16px]'>{item.description}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='xl:order-1 mt-11 xl:mt-0'>
                <div className='overflow-hidden rounded-md'>
                    <img src={infoImage} alt='info-image'/>
                </div>
            </div>
        </div>
    );
};

export default Services;
