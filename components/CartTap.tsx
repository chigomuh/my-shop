import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  useCartReducerState,
  useCartReducerDispatch,
  Product,
} from "../reducer/reducer";

interface Props {
  handleCartTap: () => void;
  handleLoginTap: () => void;
}

const CartTap = ({ handleCartTap, handleLoginTap }: Props) => {
  const state = useCartReducerState();
  const dispatch = useCartReducerDispatch();
  const cartCount = state.cartProduct.length;

  const increaseProduct = (product: Product) => {
    dispatch({
      type: "add",
      payload: {
        product,
      },
    });
  };

  const decreaseProduct = (product: Product) => {
    dispatch({
      type: "decrease",
      payload: {
        product,
      },
    });
  };

  const removeProduct = (product: Product) => {
    dispatch({
      type: "remove",
      payload: {
        product,
      },
    });
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-black opacity-20 z-40"
        onClick={handleCartTap}
      ></div>
      <div className="absolute top-0 right-0 z-50 h-screen w-screen md:w-[448px] bg-white flex flex-col overflow-y-auto">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center cursor-pointer hover:opacity-70">
            <Image
              src="/image/exit.svg"
              alt="exit-icon"
              width={32}
              height={32}
              onClick={handleCartTap}
            />
            <span className="font-thin">Close</span>
          </div>
          <div className="flex justify-end space-x-4">
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
          </div>
        </div>
        <div className="relative">
          <div className="font-bold text-2xl px-4">My Cart</div>
          {state.cartProduct.map((product, index) => (
            <React.Fragment key={index}>
              <div className="p-4 border-b-[1px] relative">
                <div className="flex py-2 justify-between">
                  <div className="flex space-x-4">
                    <div className="bg-[#7928ca] w-16 h-16">
                      <Link href={`/product/${product.id}`}>
                        <a>
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={50}
                            height={50}
                            layout="responsive"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="">
                      <div>{product.name}</div>
                      <div className="flex space-x-4">
                        {product.color !== "" && (
                          <div className="flex items-center space-x-2">
                            <span>Color</span>
                            <div
                              className="w-6 h-6 rounded-full border"
                              style={{
                                backgroundColor: product.color,
                              }}
                            ></div>
                          </div>
                        )}
                        {product.size !== "" && (
                          <div className="flex items-center space-x-2">
                            <span>Size</span>
                            <div className="text-xs w-6 h-6 bg-white border rounded-full flex items-center justify-center font-bold">
                              {product.size}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm">
                    {product.price.toLocaleString("ko-KR")} ₩
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  {/* 상품 삭제 기능 */}
                  <div
                    className="border flex items-center cursor-pointer"
                    onClick={() => removeProduct(product)}
                  >
                    <Image
                      src="/image/exit.svg"
                      alt="remove"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="flex w-[90%] border">
                    <div className="w-full pl-4 text-lg cursor-text">
                      {product.count}
                    </div>

                    {/* 수량 감소 기능 */}
                    <div
                      className="border-l-[1px] border-r-[1px] flex items-center cursor-pointer"
                      onClick={() => decreaseProduct(product)}
                    >
                      <Image
                        src="/image/minus.svg"
                        alt="minus"
                        width={28}
                        height={28}
                      />
                    </div>

                    {/* 수량 증가 기능 */}
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => increaseProduct(product)}
                    >
                      <Image
                        src="/image/plus.svg"
                        alt="minus"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          {/* 여기는 결제 부분 */}
          <div className="sticky bottom-0 bg-white left-0 w-full h-64 border-t-[1px]">
            <div className="pt-6 pb-4 px-4 text-sm border-b-[1px] mb-4 space-y-2">
              <div className="flex justify-between items-center">
                <div>Subtotal</div>
                <div>{state.totalPrice.toLocaleString("ko-KR")} ₩</div>
              </div>
              <div className="flex justify-between items-center">
                <div>Taxes</div>
                <div>Calculated at checkout</div>
              </div>
              <div className="flex justify-between items-center">
                <div>Shipping</div>
                <div className="font-bold">FREE</div>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 mb-4">
              <div className="font-bold">Total</div>
              <div className="font-bold">
                {state.totalPrice.toLocaleString("ko-KR")} ₩
              </div>
            </div>
            <div className="w-full h-16 text-white font-bold flex items-center justify-center">
              <div className="bg-black w-[90%] h-full flex items-center justify-center cursor-pointer">
                PROCEED TO CHECKOUT
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTap;
