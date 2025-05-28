import logo from "../assets/logo/thebeatleslogo.png";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { RxTwitterLogo } from "react-icons/rx";
import { LiaYoutube } from "react-icons/lia";

const Footer = () => {
    return (
        <div className="w-full min-h-[294.5px]  pt-[40px] px-20 pb-4 border bg-black flex flex-col justify-evenly">

            <div className="text-white flex flex-wrap justify-between gap-8 pb-8">

                <div className="sm:w-auto w-full">
                    <img src={logo} alt={logo} className="w-[64px] h-[48px] mb-4" />
                </div>

                <div className="flex flex-col gap-5">
                    <p>Events</p>
                    <p>News</p>
                    <p>Episodes</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p>For Professionals</p>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Terms & conditions</p>
                </div>
                <div className="flex flex-col gap-5 max-w-[350px]">

                    <p>Follow us on social media and join our growing community of performing arts enthusiasts.</p>

                    <div className="icons-con flex gap-4 text-2xl">

                        <span className="bg-neutral-700 rounded-full cursor-pointer p-2 hover:text-[#e4405f] transition-colors duration-200 ease-in-out">
                            <FaInstagram />
                        </span>

                        <span className="bg-neutral-700 rounded-full cursor-pointer p-2 hover:text-[#3b5999] transition-colors duration-200 ease-in-out">
                            <SlSocialFacebook />
                        </span >

                        <span className="bg-neutral-700 rounded-full cursor-pointer p-2 hover:text-[#55acee] transition-colors duration-200 ease-in-out">
                            <RxTwitterLogo />
                        </span>

                        <span className="bg-neutral-700 rounded-full cursor-pointer p-2 hover:text-[#cd201f] transition-colors duration-200 ease-in-out">
                            <LiaYoutube />
                        </span>

                    </div>
                </div>
            </div>
            <p className="text-white">© Red Curtain Addict 2021</p>
        </div>
    )
}

export default Footer;