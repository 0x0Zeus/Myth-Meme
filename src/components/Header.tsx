import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { useState } from "react";
import SubscribeModal from "./SubscribeModal";
import { FaXTwitter } from "react-icons/fa6";

function Header() {
  const [subscribeVisible, setSubscribeVisible] = useState(false);

  const handleSubscribe = () => {
    setSubscribeVisible(true);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to={"/aboutus"} className="text-base">
          Legends
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to={"/character/kaelith"} className="text-base">
          Characters
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to={"/tokenomics"} className="text-base">
          Tokenomics
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link to={"/aboutus"} className="text-base">
          About Us
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link to={"/contactus"} className="text-base">
          Contact Us
        </Link>
      ),
      key: "4",
    },
    {
      type: "divider",
    },
    {
      label: (
        <button className="text-base" onClick={() => handleSubscribe()}>
          Subscribe
        </button>
      ),
      key: "5",
    },
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-[#000000]">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between px-4 py-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/icons/logo.png"
                alt="Logo"
                className="h-[52px] w-[52px]"
              />
              <p className="text-center font-blackOpsOne text-2xl leading-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Myth Memes
              </p>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden h-12 items-center rounded-full border border-[#ffffff]/60 p-1 font-spaceGrotesk lg:flex ">
              <Link
                to="/aboutus"
                className="text-nowrap flex h-full items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-medium text-[#ffffff] transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                <li className="flex h-full items-center">Legends</li>
              </Link>
              <Link
                to="/character/kaelith"
                className="text-nowrap flex h-full items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-medium text-[#ffffff] transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                <li className="flex h-full items-center">Characters</li>
              </Link>
              <Link
                to="/tokenomics"
                className="text-nowrap flex h-full items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-medium text-[#ffffff] transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                <li className="flex h-full items-center">Tokenomics</li>
              </Link>
              <Link
                to="/aboutus"
                className="text-nowrap flex h-full items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-medium text-[#ffffff] transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                <li className="flex h-full items-center">About Us</li>
              </Link>
              <Link
                to="/contactus"
                className="text-nowrap flex h-full items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-medium text-[#ffffff] transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                <li className="flex h-full items-center">Contact Us</li>
              </Link>
            </ul>
            <div className="flex items-center gap-5">
              {/* Desktop Subscribe Button */}
              <div className="hidden h-12 w-[150px] rounded-lg bg-gradient-to-b from-[#0f0f0f] to-[#0f0f0f50] p-[1px] lg:block">
                <div className="h-full w-full rounded-[7px] bg-gradient-to-t from-[#0f0f0f] to-[#939393] p-[1px]">
                  <button
                    type="button"
                    className="font-base h-full w-full rounded-md bg-[#0F0F0F] text-white"
                    onClick={() => handleSubscribe()}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <Link
                to="https://x.com/poememey"
                className="hover:text-white max-lg:hidden text-[#ffffff]"
              >
                <FaXTwitter size={24} />
              </Link>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="flex items-center gap-5 lg:hidden">
              <Link to="https://x.com/poememey" className="hover:text-white">
                <FaXTwitter size={24} />
              </Link>
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                overlayClassName="mt-6 bg-[#ffffff] rounded-md select-none"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <MenuOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent opacity-[0.15]"></div>
      <SubscribeModal
        visible={subscribeVisible}
        setVisible={setSubscribeVisible}
      />
    </>
  );
}

export default Header;
