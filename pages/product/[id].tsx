import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { SyntheticEvent, useState } from "react";
import DetailClickBar from "../components/DetailClickBar";
import ProductCard from "../components/ProductCard";
import data from "../db/data.json";
import { Product } from "../index";

interface Props {
  product: Product;
  related: Product[];
}

const DetailProduct = ({ product, related }: Props) => {
  let initColor;
  if (product.color) {
    initColor = product.color[0];
  } else {
    initColor = "pink";
  }

  let initSize;
  if (product.sizes) {
    initSize = product.sizes[0];
  } else {
    initSize = "Free";
  }

  const [mainImageIndex, setMainImageIndex] = useState<number>(0);
  const [currentColor, setCurrentColor] = useState<string>(initColor);
  const [currentSize, setCurrentSize] = useState<string>(initSize);

  const handleImage = (event: SyntheticEvent<HTMLDivElement>) => {
    const currentImageIndex = Number(event.currentTarget.id);
    setMainImageIndex(currentImageIndex);
  };

  const handleSlide = (direction: string) => {
    if (direction === "left" && mainImageIndex > 0) {
      setMainImageIndex(mainImageIndex - 1);
    } else if (
      direction === "right" &&
      mainImageIndex < product.image_url.length - 1
    ) {
      setMainImageIndex(mainImageIndex + 1);
    } else {
      return;
    }
  };

  const handleColorChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setCurrentColor(event.currentTarget.value);
  };

  const handleSizeChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setCurrentSize(event.currentTarget.value);
  };

  return (
    <>
      <div className="w-screen lg:flex">
        <div className="relative lg:w-2/3 h-max">
          <div className="relative w-full max-h-[782px] flex justify-center bg-[#7928ca]">
            <ProductCard
              name={product.name}
              price={product.price}
              image_url={product.image_url[mainImageIndex]}
              bg_color="#7928ca"
              priority={true}
              width={600}
              height={600}
              layout={"intrinsic"}
            />
            <div className="absolute bottom-0 right-0 border-2 border-white w-40 h-12 flex m-10">
              <div
                className="border-r-2 border-white w-1/2 h-full cursor-pointer hover:bg-[#4c2889] duration-150 transition-all"
                onClick={() => handleSlide("left")}
              >
                <div className="rotate-180 flex justify-center items-center w-full h-full">
                  <Image
                    src="/image/rightArrow.svg"
                    alt="left-arrow"
                    width={26}
                    height={26}
                  />
                </div>
              </div>
              <div
                className="w-1/2 h-full hover:bg-[#4c2889] cursor-pointer duration-150 transition-all"
                onClick={() => handleSlide("right")}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <Image
                    src="/image/rightArrow.svg"
                    alt="left-arrow"
                    width={26}
                    height={26}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex h-max bg-[#4c2889]">
            {product.image_url.map((image, index) => (
              <div
                key={index}
                id={index.toString()}
                className="cursor-pointer"
                style={{
                  backgroundColor:
                    mainImageIndex === index ? "white" : "#4c2889",
                }}
                onClick={handleImage}
              >
                <Image
                  src={image}
                  alt="product-image"
                  width={250}
                  height={250}
                  priority={true}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:w-1/3 bg-white p-6">
          <div>
            <form className="space-y-4">
              <div className="text-[#777777]">SIZE</div>
              {product.sizes ? (
                <div className="flex space-x-4">
                  {product.sizes.map((size, index) => (
                    <React.Fragment key={size}>
                      <label
                        htmlFor={`size-checkbox${index}`}
                        className="cursor-pointer hover:scale-110 duration-150 transition-all"
                      >
                        <input
                          id={`size-checkbox${index}`}
                          value={size}
                          type="radio"
                          className="hidden peer"
                          checked={currentSize === size ? true : false}
                          onChange={handleSizeChange}
                        />
                        <div className="absolute w-12 h-12 rounded-full peer-checked:block hidden border-black border-2"></div>
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center font-bold border border-gray-500"
                          style={{
                            backgroundColor: "white",
                          }}
                        >
                          {size}
                        </div>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <div className="text-sm">Only One Size.</div>
              )}
              <div className="text-[#777777]">COLOR</div>
              {product.color ? (
                <div className="flex space-x-4">
                  {product.color.map((color, index) => (
                    <React.Fragment key={color}>
                      <label
                        htmlFor={`color-checkbox${index}`}
                        className="cursor-pointer hover:scale-110 duration-150 transition-all"
                      >
                        <input
                          id={`color-checkbox${index}`}
                          value={color}
                          type="radio"
                          className="hidden peer"
                          checked={currentColor === color ? true : false}
                          onChange={handleColorChange}
                        />
                        <div className="absolute w-12 h-12 rounded-full peer-checked:block hidden border-black border-2">
                          <div className="w-full h-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke={color === "black" ? "white" : "black"}
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        </div>
                        <div
                          className="w-12 h-12 rounded-full border border-gray-500"
                          style={{
                            backgroundColor: color,
                          }}
                        ></div>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <div className="text-sm">Only One Color.</div>
              )}
              <div>{product.description}</div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src="/image/star.svg"
                    alt="rating-icon"
                    width={20}
                    height={20}
                  />
                  {product.rating}
                </div>
                <div className="text-xs">{product.reviews} reviews</div>
              </div>
              <button
                type="submit"
                className="font-bold text-white text-sm bg-black w-full h-14 hover:bg-[#333333] duration-150 transition-all"
              >
                ADD TO CART
              </button>
              <div>
                <DetailClickBar text="Care" detail={product.care} />
                <DetailClickBar text="Detail" detail={product.details} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="font-bold text-2xl p-4">Related Products</div>
      <div className="grid grid-cols-2 md:grid-cols-4 relative w-screen gap-10 p-4 pr-8">
        {related.map((product) => (
          <React.Fragment key={product.id}>
            <div className="border bg-[#fafafa] w-full">
              <Link href={`/product/${product.id}`}>
                <a className="w-full">
                  <Image
                    src={product.image_url[0]}
                    alt={product.name}
                    width={250}
                    height={250}
                    layout="responsive"
                    priority={true}
                  />
                </a>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = data.product.filter((product) => {
    if (params && params.id === product.id.toString()) {
      return true;
    }
  });

  const related = data.product.slice(0, 4);

  return {
    props: {
      product: product[0],
      related,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.product.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default DetailProduct;
