import Image from "next/image";
import Link from "next/link";
import { Product } from "../index";

interface Props {
  sliderProduct: Product[];
  bgColor: string;
}

const Slider = ({ sliderProduct, bgColor }: Props) => {
  const sliderImages = [...sliderProduct, ...sliderProduct];

  return (
    <div className="flex overflow-x-hidden w-[200vw] animate-slider">
      {sliderImages.map((product, index) => (
        <div key={index} className="w-1/3">
          <Link href={`/product/${product.id}`}>
            <a>
              <div
                className="relative flex items-center justify-end"
                style={{
                  backgroundColor: bgColor,
                }}
              >
                <Image
                  src={product.image_url[0]}
                  alt={product.name}
                  width={300}
                  height={300}
                />
                <div
                  className="absolute font-bold text-xs md:text-sm lg:text-xl p-2"
                  style={{
                    backgroundColor: bgColor === "black" ? "white" : "black",
                    color: bgColor === "black" ? "black" : "white",
                  }}
                >
                  {product.name}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Slider;
