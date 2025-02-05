import logo from '../../assets/image/logo.png'
import banner from '../../assets/image/banner-main.png'

import { TbCoinFilled } from "react-icons/tb";
import './header.css'
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify';

const Header = () => {

    const[coin,setCoin] = useState(0);

    function AddCoin(amount) {
        setCoin(coin+amount);

        toast.success('Credit Added to your Account', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }

    return (
        <div  className='px-10'>
{/* Nav Bar */}
    <div className="flex justify-between items-center p-10 h-bg fixed z-50 top-0 left-0 right-0">
        <div>
            <img src={logo} alt="LoGo" />
        </div>
        <div>
            <ul className="flex gap-5 items-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">Fixture</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Schedules</a></li>
                <button className="border rounded-lg p-2 flex items-center gap-2">
                    {coin} Coin <TbCoinFilled className="text-2xl text-yellow-400"></TbCoinFilled>
                </button>
            </ul>
        </div>
    </div>

{/* Banner */}
    <div className="banner my-2 p-20 rounded-2xl flex flex-col justify-center items-center gap-5 mt-40">
        <img className="mx-auto" src={banner} alt="Banner" />
        <h1 className="text-white text-4xl font-bold ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h1 className="text-gray-400 text-3xl">Beyond Boundaries Beyond Limits</h1>
        <div className='border border-yellow-300 p-2 rounded-xl'>
        <button className="banner-btn font-bold" onClick={() => AddCoin(90090009)}>Claim Free Credit</button>
        </div>
        <ToastContainer />
    </div>
</div>

    );
};

export default Header;