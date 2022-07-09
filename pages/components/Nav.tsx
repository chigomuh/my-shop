import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { NavTap, FooterTap } from "../data/config";

interface Props {
  cartCount?: number;
}

const Nav = ({ cartCount }: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuTap = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.setAttribute("style", "overflow: hidden;");
    } else {
      document.body.setAttribute("style", "");
    }
  };

  return (
    <nav className="bg-white sticky z-40 top-0 border border-b-2">
      <div className="w-screen h-16 flex items-center justify-between px-4">
        <div className="w-[45%] lg:w-[30%] items-center flex">
          <div className="hover:cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  src="/image/logo.svg"
                  alt="logo"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-4 ml-4">
            {NavTap.map((tap) => (
              <Link key={tap.text} href={tap.path}>
                <a>{<div>{tap.text}</div>}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[30%] hidden lg:flex max-w-2xl">
          <SearchBar />
        </div>
        <div className="w-[45%] lg:w-[30%] flex items-center justify-end space-x-4 pr-4">
          <div className="flex items-center relative hover:cursor-pointer">
            <Image
              src="/image/shoppingBag.svg"
              alt="shoppingBag"
              width={32}
              height={32}
            />
            {cartCount && (
              <div className="w-4 h-4 bg-black absolute bottom-0 rounded-full left-0 flex items-center justify-center">
                <span className="z-50 text-white text-xs font-bold">
                  {cartCount}
                </span>
              </div>
            )}
          </div>
          <div>
            <Link href="/login">
              <a className="bg-blue-300 rounded-full flex items-center hover:cursor-pointer">
                <Image
                  src="/image/profile-icon.png"
                  alt="profile"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </div>
          <div
            className="flex lg:hidden items-center hover:cursor-pointer"
            onClick={handleMenuTap}
          >
            <Image
              src="/image/hamburger.svg"
              alt="menu"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center pl-4 pr-9 py-2 lg:hidden">
        <SearchBar />
      </div>
      {menuOpen && (
        <>
          <div
            className="absolute top-0 left-0 w-screen h-screen bg-black opacity-20 z-40"
            onClick={handleMenuTap}
          ></div>
          <div className="absolute top-0 right-0 z-50 h-screen w-screen md:w-[448px] bg-white flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4" onClick={handleMenuTap}>
              <Image src="/image/exit.svg" alt="exit" width={32} height={32} />
            </div>
            <div className="px-10">
              {NavTap.map((tap) => (
                <Link key={tap.text} href={tap.path}>
                  <a className="flex justify-center m-10 text-xl border-b-2">
                    {tap.text}
                  </a>
                </Link>
              ))}
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-1 text-sm p-20 justify-around items-center">
              {FooterTap.map((tap) => (
                <Link key={tap.text} href={tap.path}>
                  <a className="">{tap.text}</a>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
