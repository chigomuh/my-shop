import ProductCard from "./ProductCard";
import Link from "next/link";
import React from "react";
import { Product } from "..";

interface Props {
  products: Product[];
}

const SearchMainContent = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <div className="text-xl flex justify-center items-center p-4">
            <Link href={`/product/${product.id}`}>
              <a className="relative hover:scale-105 duration-300 transition-all w-full h-max">
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image_url={product.image_url[0]}
                  bg_color="#fafafa"
                  width={250}
                  height={250}
                  layout="responsive"
                />
              </a>
            </Link>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default SearchMainContent;
