import { PropsWithChildren, useReducer } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { createContext } from "react";
import reducer, {
  CartStateContext,
  CartDispatchContext,
} from "../reducer/reducer";

export const GlobalContext = createContext({});

const Layout = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, {
    cartProduct: [],
    totalPrice: 0,
  });

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export default Layout;
