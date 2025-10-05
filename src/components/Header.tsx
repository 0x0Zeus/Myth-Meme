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
    // {
    //   label: (
    //     <Link to={"/tokenomics"} className="text-base">
    //       Tokenomics
    //     </Link>
    //   ),
    //   key: "2",
    // },
    {
      label: (
        <Link to={"/aboutus"} className="text-base">
          About Us
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link to={"/contactus"} className="text-base">
          Contact Us
        </Link>
      ),
      key: "3",
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
      key: "4",
    },
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/icons/logo.png"
                alt="Logo"
                className="h-10 w-10"
              />
              <p className="text-center font-blackOpsOne text-2xl leading-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Myth Memes
              </p>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-6 font-spaceGrotesk text-sm text-[#ffffff]/80 lg:flex ">
              <Link
                to="/character/kaelith"
                className="text-nowrap flex items-center whitespace-nowrap font-medium hover:text-white"
              >
                <li className="flex h-full items-center">Characters</li>
              </Link>
              {/* <Link
                to="/tokenomics"
                className="text-nowrap flex items-center whitespace-nowrap font-medium hover:text-white"
              >
                <li className="flex h-full items-center">Tokenomics</li>
              </Link> */}
              <Link
                to="/aboutus"
                className="text-nowrap flex items-center whitespace-nowrap font-medium hover:text-white"
              >
                <li className="flex h-full items-center">About Us</li>
              </Link>
              <Link
                to="/contactus"
                className="text-nowrap flex items-center whitespace-nowrap font-medium hover:text-white"
              >
                <li className="flex h-full items-center">Contact Us</li>
              </Link>
            </ul>
            <div className="flex items-center gap-5">
              {/* Desktop Subscribe Button */}
              <div className="hidden lg:block">
                <button
                  type="button"
                  className="h-10 px-4 rounded-md border border-[#333333] text-[#ffffff]/90 hover:text-white hover:border-[#666666] transition-colors"
                  onClick={() => handleSubscribe()}
                >
                  Get Started
                </button>
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
      <div className="hidden"></div>
      <SubscribeModal
        visible={subscribeVisible}
        setVisible={setSubscribeVisible}
      />
    </>
  );
}

export default Header;
