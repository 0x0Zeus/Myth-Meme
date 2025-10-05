import { FC } from "react";
import Subscribe from "./Home/Subscribe";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-[#0a0a0a]/70 backdrop-blur-md border-t border-[#1f1f1f] font-spaceGrotesk text-[#FFFFFF]/70">
      <Subscribe />
      <div className="container mx-auto">
        <div className=" px-4 text-base text-[#FFFFFF]/60">
          <div className="flex flex-col items-center px-5 py-10 md:flex-row md:justify-between md:px-0">
            <span className="mb-4 md:mb-0">
              @ 2025 Myth Memes, All Rights Reserved.
            </span>
            <ul className="flex items-center divide-x divide-[#1f1f1f] ">
            <li className="px-4">
                <Link
                  to="https://x.com/poememey"
                  className="hover:text-white"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li className="px-4 text-[#FFFFFF]/60 hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="px-4 text-[#FFFFFF]/60 hover:text-white cursor-pointer">Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
