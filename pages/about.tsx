import Image from "next/image";
import Link from "next/link";
import Seo from "../components/Seo";

const About = () => {
  return (
    <>
      <Seo title="About" />
      <div className="w-screen text-center text-2xl space-y-10 h-max my-20">
        <div className="w-full flex justify-center">
          <div className="border border-[#777777] w-40 h-40 rounded-full hover:scale-110 duration-300 transition-all">
            <Link href="https://github.com/chigomuh">
              <a>
                <Image
                  src="/image/chigomuh.png"
                  alt="chigomuh"
                  width={250}
                  height={250}
                  className="rounded-full"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="text-4xl">chigomuh</div>
      </div>
    </>
  );
};

export default About;
