import React from 'react'
import TopNav from '../layout/TopNav'

export default function Home() {
    return (
        <>
            <div className='min-h-[53.12rem] bg-[url("../../../public/images/home-bg.png")]  bg-cover bg-center bg-no-repeat '>
                <TopNav />
                <div className='text-white flex justify-center'>
                    <div className='w-[84.5rem] h-100 mt-36'>
                        <div className='w-[43.75rem]'>
                            <p className='text-xl'>Welcome to
                                <br />
                                <span className='text-7xl font-bold mt-9 inline-block'>Hotel Paradise</span>
                                <br />
                                <span className='text-7xl font-bold mt-9 inline-block' >Ahmedabad India</span>
                            </p>
                            <p className='mt-9 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nihil rem maxime praesentium quo magni illo fugit animi harum.</p>
                            <button className='mt-9 bg-white text-black px-3 py-2 rounded-md'>Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
