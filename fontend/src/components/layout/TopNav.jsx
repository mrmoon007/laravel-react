import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from "../../assets/images/Logo.png";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function TopNav() {
    return (
        <div className='flex justify-center m'>
            <div className='w-[84.37rem] h-[3.1rem] center mt-[3.1875rem]'>
                <div className='text-white flex justify-between'>
                    <div className='flex centent-center'>
                        <div className='white'>
                            <img className='hover:text-yellow-200' src={logo} alt="" />
                        </div>
                        <div className='flex h-[3.1rem] h-6'>
                            <a className='ml-8 content-center text-xl hover:text-yellow-200 font-semibold' href="http://">Home</a>
                            <a className='mx-4 content-center text-xl hover:text-yellow-200 font-semibold' href="http://">About</a>
                            <a className='mx-4 content-center text-xl hover:text-yellow-200 font-semibold' href="http://">Rooms</a>
                            <a className='mx-4 content-center text-xl hover:text-yellow-200 font-semibold' href="http://">Service</a>
                            <a className='mx-4 content-center text-xl hover:text-yellow-200 font-semibold' href="http://">Contact</a>
                        </div>

                    </div>
                    <div className='text-white'>
                        <FontAwesomeIcon className='w-4 h-4 hover:text-yellow-200 mx-2.5' icon={faTwitter} />
                        <FontAwesomeIcon className='w-4 h-4 hover:text-yellow-200 mx-2.5' icon={faFacebook} />
                        <FontAwesomeIcon className='w-4 h-4 hover:text-yellow-200 ml-2.5 mr-5' icon={faInstagram} />

                        <button type="button" className='font-semibold border-2 px-4 py-0.5 rounded-md hover:text-yellow-200'>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
