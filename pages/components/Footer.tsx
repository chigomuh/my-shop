import Image from "next/image";
import Link from "next/link";
import { FooterTap } from "../data/config";

const Footer = () => {
  return (
    <footer className="pt-12">
      <div className="lg:flex w-screen justify-between px-4 pb-14">
        <div className="flex flex-col lg:flex-row mb-10">
          <div className="flex items-start space-x-2 grid-cols-2 mr-8 mb-8">
            <Image
              src="/image/logo.svg"
              alt="logo"
              width={32}
              height={32}
              className="hover:cursor-pointer"
            />
            <span className="text-lg font-bold hover:cursor-pointer">ACME</span>
          </div>
          <div className="grid md:grid-rows-4 md:grid-flow-col max-w-xl">
            {FooterTap.map((tap) => (
              <span key={tap.text} className="my-2 lg:mx-10">
                <Link href={tap.path}>
                  <a>{tap.text}</a>
                </Link>
              </span>
            ))}
          </div>
        </div>
        <div className="lg:pr-4 flex justify-start lg:justify-center lg:items-start">
          <div className="flex items-center space-x-4">
            <div className="hover:cursor-pointer">
              <Link href="https://github.com/chigomuh/my-shop">
                <a>
                  <Image
                    src="/image/github-icon.svg"
                    alt="github-icon"
                    width={26}
                    height={26}
                  />
                </a>
              </Link>
            </div>
            <div className="relative flex w-[70px] rounded-lg border-2 justify-center py-1 space-x-1">
              <div className="flex hover:cursor-pointer rounded-full border">
                <Image
                  src="/image/korea-icon.svg"
                  alt="korea-icon"
                  width={26}
                  height={26}
                />
              </div>
              <input id="checkbox" type="checkbox" className="peer hidden" />
              <label
                htmlFor="checkbox"
                className="flex hover:cursor-pointer peer-checked:rotate-180 duration-150 transform"
              >
                <Image
                  src="/image/arrow.svg"
                  alt="arrow-icon"
                  width={20}
                  height={20}
                />
              </label>
              <div className="absolute top-10 w-full hidden justify-center border-2 shadow-md peer-checked:flex">
                한국어
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-t-2 w-screen h-28 flex justify-between px-4 items-center text-sm">
        <span>© 2022 666666, Inc. All rights reserved.</span>
        <div className="pr-4 flex items-center space-x-2">
          <span>Created by</span>
          <div className="flex items-center">
            <Image src="/vercel.svg" alt="logo" width={90} height={32} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
