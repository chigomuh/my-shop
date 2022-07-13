import Image from "next/image";
import Link from "next/link";
import { NavTap, FooterTap } from "../data/config";

interface Props {
  handleMenuTap: () => void;
}

const MenuTap = ({ handleMenuTap }: Props) => {
  return (
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
              <a
                className="flex justify-center m-10 text-xl border-b-2"
                onClick={handleMenuTap}
              >
                {tap.text}
              </a>
            </Link>
          ))}
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-1 text-sm p-20 justify-around items-center">
          {FooterTap.map((tap) => (
            <Link key={tap.text} href={tap.path}>
              <a>{tap.text}</a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuTap;
