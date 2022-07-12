import type { GetStaticProps, NextPage } from "next";
import Seo from "./components/Seo";
import ProductCard from "./components/ProductCard";
import data from "./db/data.json";
import Slider from "./components/Slider";
import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  image_url: string[];
  description: string;
  sizes: string[] | null;
  color: string[] | null;
  rating: string;
  reviews: number;
  care: string;
  details: string;
  type: string;
}

interface Props {
  product: Product[];
}

const Home: NextPage<Props> = ({ product }) => {
  const topSliderProduct = product.slice(0, 3);
  const bottomSliderProduct = product.slice(3, 6);

  return (
    <>
      <Seo title="Home" />
      <div className="overflow-x-hidden">
        <div className="lg:flex">
          <div className="relative lg:w-2/3">
            <Link href={`/product/${product[0].id}`}>
              <a className="text-2xl lg:text-4xl">
                <ProductCard
                  name={product[0].name}
                  price={product[0].price}
                  image_url={product[0].image_url[0]}
                  bg_color="#7928ca"
                  width={250}
                  height={250}
                />
              </a>
            </Link>
          </div>
          <div className="lg:w-1/3">
            <div className="relative">
              <Link href={`/product/${product[1].id}`}>
                <a className="text-2xl lg:text-4xl">
                  <ProductCard
                    name={product[1].name}
                    price={product[1].price}
                    image_url={product[1].image_url[0]}
                    bg_color="black"
                    width={250}
                    height={250}
                  />
                </a>
              </Link>
            </div>
            <div className="relative">
              <Link href={`/product/${product[2].id}`}>
                <a className="text-2xl lg:text-4xl">
                  <ProductCard
                    name={product[2].name}
                    price={product[2].price}
                    image_url={product[2].image_url[0]}
                    bg_color="#ff0080"
                    width={250}
                    height={250}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Slider sliderProduct={topSliderProduct} bgColor="black" />
        <div className="bg-black text-white w-screen lg:h-[486px] border-t-2 border-b-2 flex items-center h-full">
          <div className="lg:flex space-x-4 px-4 space-y-4 lg:space-y-0">
            <div className="font-bold text-4xl lg:text-5xl lg:w-60 lg:text-end px-4">
              Dessert dragée halvah croissant.
            </div>
            <div className="lg:w-2/3 flex flex-col items-start text-lg space-y-6 lg:p-2">
              <div>
                Cupcake ipsum dolor sit amet lemon drops pastry cotton candy.
                Sweet carrot cake macaroon bonbon croissant fruitcake jujubes
                macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu
                sweet roll cheesecake pie carrot cake.
              </div>
              <Link href="/">
                <a className="hover:border-b-2 border-white flex w-max font-bold">
                  Read it here
                  <Image
                    src="/image/detailArrow.svg"
                    alt="arrowIcon"
                    width={26}
                    height={26}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/3">
            <div className="relative">
              <Link href={`/product/${product[0].id}`}>
                <a className="text-2xl lg:text-4xl">
                  <ProductCard
                    name={product[0].name}
                    price={product[0].price}
                    image_url={product[0].image_url[0]}
                    bg_color="#7928ca"
                    width={250}
                    height={250}
                  />
                </a>
              </Link>
            </div>
            <div className="relative">
              <Link href={`/product/${product[2].id}`}>
                <a className="text-2xl lg:text-4xl">
                  <ProductCard
                    name={product[2].name}
                    price={product[2].price}
                    image_url={product[2].image_url[0]}
                    bg_color="#ff0080"
                    width={250}
                    height={250}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="relative lg:w-2/3">
            <Link href={`/product/${product[1].id}`}>
              <a className="text-2xl lg:text-4xl">
                <ProductCard
                  name={product[1].name}
                  price={product[1].price}
                  image_url={product[1].image_url[0]}
                  bg_color="black"
                  width={250}
                  height={250}
                />
              </a>
            </Link>
          </div>
        </div>
        <Slider sliderProduct={bottomSliderProduct} bgColor="white" />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const product = data.product;

  return {
    props: {
      product,
    },
  };
};

export default Home;
