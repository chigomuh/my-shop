import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { NavTap } from "../data/config";
import MenuTap from "./MenuTap";
import CartTap from "./CartTap";
import { useCartReducerState } from "../reducer/reducer";
import LoginTap from "./LoginTap";
import SignUpTap from "./SignUpTap";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false);
  const state = useCartReducerState();
  const cartCount = state.cartProduct.length;

  const handleMenuTap = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.setAttribute("style", "overflow: hidden;");
    } else {
      document.body.setAttribute("style", "");
    }
  };

  const handleCartTap = () => {
    setCartOpen(!cartOpen);

    if (!cartOpen) {
      document.body.setAttribute("style", "overflow: hidden;");
    } else {
      document.body.setAttribute("style", "");
    }
  };

  const handleLoginTap = () => {
    if (signUpOpen) {
      setSignUpOpen(!signUpOpen);
    }
    setLoginOpen(!loginOpen);

    if (!loginOpen) {
      document.body.setAttribute("style", "overflow: hidden;");
    } else {
      document.body.setAttribute("style", "");
    }
  };

  const handleSignUpTap = () => {
    if (loginOpen) {
      setLoginOpen(!loginOpen);
    }
    setSignUpOpen(!signUpOpen);

    if (!signUpOpen) {
      document.body.setAttribute("style", "overflow: hidden;");
    } else {
      document.body.setAttribute("style", "");
    }
  };

  return (
    <nav className="bg-white sticky z-40 top-0 border-b-2 lg:flex justify-center">
      <div className="w-full h-16 flex items-center justify-between px-4 max-w-7xl">
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
        <div className="w-[45%] lg:w-[30%] flex items-center justify-end space-x-4">
          <div
            className="flex items-center relative hover:cursor-pointer"
            onClick={handleCartTap}
          >
            <Image
              src="/image/shoppingBag.svg"
              alt="shoppingBag"
              width={32}
              height={32}
            />
            {cartCount ? (
              <div className="w-4 h-4 bg-black absolute bottom-0 rounded-full left-0 flex items-center justify-center">
                <span className="z-50 text-white text-xs font-bold">
                  {cartCount}
                </span>
              </div>
            ) : null}
          </div>
          <div className="bg-blue-300 rounded-full flex items-center hover:cursor-pointer">
            <Image
              src="/image/profile-icon.png"
              alt="profile"
              width={32}
              height={32}
              onClick={handleLoginTap}
            />
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
      <div className="w-screen p-4 py-2 lg:hidden">
        <SearchBar />
      </div>
      {menuOpen && <MenuTap handleMenuTap={handleMenuTap} />}
      {cartOpen && (
        <CartTap
          handleCartTap={handleCartTap}
          handleLoginTap={handleLoginTap}
        />
      )}
      {loginOpen && (
        <LoginTap
          handleLoginTap={handleLoginTap}
          handleSignUpTap={handleSignUpTap}
        />
      )}
      {signUpOpen && (
        <SignUpTap
          handleSignUpTap={handleSignUpTap}
          handleLoginTap={handleLoginTap}
        />
      )}
    </nav>
  );
};

export default Nav;
