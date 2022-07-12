import { createContext, Dispatch, useContext } from "react";

export interface Product {
  id: number;
  color: string;
  size: string;
  name: string;
  price: number;
  imageUrl: string;
  count: number;
}

interface CartState {
  cartProduct: Product[];
  totalPrice: number;
}

/**
 * 장바구니에 필요한 state
 * 1. 이미지
 * 2. 이름
 * 3. 색상
 * 4. 사이즈
 * 5. 가격
 * 6. 수량
 * 7. 상품 ID
 */

interface CartAction {
  type: "add" | "remove" | "decrease";
  payload: {
    product: Product;
  };
}

interface CartActionCommand {
  ADD: string;
  REMOVE: string;
  DECREASE: string;
}

type CartDispatch = Dispatch<CartAction>;

const actionCommand: CartActionCommand = {
  ADD: "add",
  REMOVE: "remove",
  DECREASE: "decrease",
};

const handleCartProductCount = (
  cartProduct: Product[],
  targetProduct: Product,
  type: "increase" | "decrease" | "remove"
) => {
  const addExist = cartProduct.findIndex((product) => {
    if (
      product.id === targetProduct.id &&
      product.color === targetProduct.color &&
      product.size === targetProduct.size
    ) {
      return true;
    }
  });

  if (addExist !== -1) {
    const cloneCarProduct = [...cartProduct];

    if (type === "increase") {
      cloneCarProduct[addExist].count += 1;
    } else if (type === "decrease") {
      if (cloneCarProduct[addExist].count > 1) {
        cloneCarProduct[addExist].count -= 1;
      }
    } else if (type === "remove") {
      cloneCarProduct.splice(addExist, 1);
      console.log(cloneCarProduct);
    }

    let totalPrice: number = 0;
    cloneCarProduct.forEach((product) => {
      totalPrice += product.price * product.count;
    });

    return {
      cartProduct: [...cloneCarProduct],
      totalPrice: totalPrice,
    };
  }

  let totalPrice: number = 0;
  cartProduct.forEach((product) => {
    totalPrice += product.price * product.count;
  });

  return {
    cartProduct: [...cartProduct, targetProduct],
    totalPrice: totalPrice,
  };
};

const reducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case actionCommand.ADD:
      return handleCartProductCount(
        state.cartProduct,
        action.payload.product,
        "increase"
      );

    case actionCommand.DECREASE:
      return handleCartProductCount(
        state.cartProduct,
        action.payload.product,
        "decrease"
      );

    case actionCommand.REMOVE:
      return handleCartProductCount(
        state.cartProduct,
        action.payload.product,
        "remove"
      );

    default:
      throw new Error();
  }
};

export const CartStateContext = createContext<CartState | null>(null);
export const CartDispatchContext = createContext<CartDispatch | null>(null);

export const useCartReducerState = () => {
  const state = useContext(CartStateContext);

  if (!state) throw new Error("유효하지 않습니다.");
  return state;
};

export const useCartReducerDispatch = () => {
  const dispatch = useContext(CartDispatchContext);

  if (!dispatch) throw new Error("유효하지 않습니다.");
  return dispatch;
};

export default reducer;
