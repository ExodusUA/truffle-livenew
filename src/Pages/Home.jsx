import React from 'react'
import headerImage from '../Images/truffle-slots.png'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>

            <div className='flex items-center max-w-[1240px] m-auto justify-between w-[90%] flex-col xl:flex-row'>
                <div className='max-w-full xl:max-w-[600px]'>
                    <h1 className='text-[34px] leading-10 md:text-[54px] md:leading-normal text-[#3D3230] text-left mb-4'><span className='font-irish'>Truffle Slots - </span>Your Ultimate FREE Slot Machine Experience!</h1>
                    <p className='text-[#3D3230] opacity-70 text-[18px] md:text-[22px] font-bold mb-4'>🎰  Practice Gambling Without Risking Real Money</p>
                    <p className='text-[#3D3230] opacity-70 text-[18px] md:text-[22px] font-bold mb-4'>💥 Heart-Pounding Excitement </p>
                    <p className='text-[#3D3230] opacity-70 text-[18px] md:text-[22px] font-bold mb-4'>🏆 Top the Daily Leaderboard</p>
                    <p className='text-[#3D3230] opacity-70 text-[18px] md:text-[22px] font-bold mb-4'>💰 No Money Needed</p>
                    <p className='text-[#3D3230] opacity-70 text-[18px] md:text-[22px] font-bold mb-4'>That's right, Truffle <span className='font-irish'>Slots</span> is 100% FREE to play. No hidden fees – just pure, electrifying slot machine fun.</p>
                </div>
                <img className='w-[620px]' src={headerImage} alt="Header Image" />
            </div>


            <div className='flex justify-center gap-4 mb-4 flex-wrap md:flex-nowrap mt-4'>
                <Link to="/terms"><button className='bg-transparent border-[1px] border-green py-2.5 px-8 rounded-[100px] duration-200 text-green text-[16px]'>Terms and Conditions</button></Link>
                <Link to="/privacy"><button className='bg-[#26B35E] py-2.5 px-8 rounded-[100px] duration-200 text-white text-[16px] hover:bg-[#26B35E]/80'>Privacy Policy</button></Link>
                <Link to="mailto:support@trufflelive.com"><button className='bg-[#26B35E] py-2.5 px-8 rounded-[100px] duration-200 text-white text-[16px] hover:bg-[#26B35E]/80'>Contact Us</button></Link>
                <Link to="https://truffle-live.vercel.app/" target='_blank'><button className='bg-black py-2.5 rounded-[100px] text-white px-16 text-[16px] duration-200 hover:bg-black/90'>Developer’s Account</button></Link>

            </div>
            <div className='text-center mb-8'>
                <p className='max-w-[90%] m-auto mt-12 text-gray opacity-50'>“Truffle Live Limited” 11/F., Unit B, Winbase Centre, 208 Queen’s Road Central, Sheung Wan, Hong Kong, Phone: <Link to={'tel:+ 852 2157 3121'}>+ 852 2157 3121</Link></p>
                <p className='mt-4 text-gray opacity-50'>© 2023 Truffle Live Limited. All Rights Reserved</p>
            </div>

        </>
    )
}

export default Home