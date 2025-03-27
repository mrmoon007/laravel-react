import React from 'react'

import about1 from '../../assets/images/about-1-1.png'
import about2 from '../../assets/images/about-2-1.png'
import about3 from '../../assets/images/about-3-1.png'
import about4 from '../../assets/images/about-4-1.png'

export default function About() {
    return (
        <div className='h-[40rem] bg-[#F7F6FE]'>
            <div className=' flex justify-center'>
                <div className='w-[84.37rem] mt-12 flex justify-between'>
                    <div className='w-[44.4rem]'>
                        <h3>ABOUT US</h3>

                        <h4>Welcome to Hotel Paradise</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda incidunt id cum. Fugiat repellat cumque delectus, at ipsum ad iure explicabo perferendis voluptatem vero quibusdam, pariatur molestiae quae in.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda incidunt id cum. Fugiat repellat cumque delectus, at ipsum ad iure explicabo perferendis voluptatem vero quibusdam, pariatur molestiae quae in.
                        </p>
                        <button>Discover More</button>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>

                        <img className="rounded-xl" src={about4} alt="" />


                        <img className="rounded-xl pr-0" src={about3} alt="" />


                        <img className="rounded-xl" src={about2} alt="" />


                        <img className="rounded-xl pr-0" src={about1} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}
