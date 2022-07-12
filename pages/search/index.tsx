import Link from "next/link";
import React from "react";
import ProductCard from "../components/ProductCard";
import data from "../db/data.json";

const Search = () => {
  const designers: string[] = [];
  data.product.forEach((product) => {
    designers.push(product.brand);
  });
  const uniqueDesigners = designers.filter((designer, index) => {
    return designers.indexOf(designer) === index;
  });

  return (
    <div className="flex min-h-screen w-screen justify-center">
      <div className="lg:flex w-full max-w-7xl justify-center space-x-4 relative">
        {/* 왼쪽 카테고리 컨테이너 */}
        <div className="bg-white lg:h-full p-8 justify-start space-x-10 lg:space-x-0 lg:space-y-16 lg:block flex border-b-[1px] lg:border-b-0 min-w-max">
          <div>
            <ul className="space-y-4 text-sm font-thin">
              <li className="font-bold text-lg cursor-pointer">
                All Categories
              </li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                New Arrivals
              </li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                Featured
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-sm font-thin">
              <li className="font-bold text-lg cursor-pointer">
                All Designers
              </li>
              {uniqueDesigners.map((designer) => (
                <li
                  key={designer}
                  className="cursor-pointer opacity-70 hover:opacity-100"
                >
                  {designer}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <ul className="space-y-4 text-sm font-thin">
              <li className="font-bold text-lg cursor-pointer">Relevance</li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                Trending
              </li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                Latest arrivals
              </li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                Price: Low to high
              </li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                Price: High to low
              </li>
            </ul>
          </div>
        </div>

        {/* 메인 상품 컨테이너 */}
        {/* 전체  */}
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-max">
          {data.product.map((product) => (
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
        </div>
        {/* 오른쪽 필터 컨테이너 */}
        <div className="bg-white h-full p-8 space-y-16 hidden lg:block min-w-max">
          <div>
            <ul className="space-y-4 text-sm font-thin">
              <li className="font-bold text-lg cursor-pointer">Relevance</li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                Trending
              </li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                Latest arrivals
              </li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                Price: Low to high
              </li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">
                Price: High to low
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
