import { PropsWithChildren, useReducer } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { createContext } from "react";
import reducer, {
  CartStateContext,
  CartDispatchContext,
} from "../reducer/reducer";
import { useRouter } from "next/router";
import SearchLeftNav from "./SearchLeftNav";
import SearchRightNav from "./SearchRightNav";
import data from "../db/data.json";

export const GlobalContext = createContext({});

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    cartProduct: [],
    totalPrice: 0,
  });

  const designers: string[] = [];
  data.product.forEach((product) => {
    designers.push(product.brand);
  });
  const uniqueDesigners = designers.filter((designer, index) => {
    return designers.indexOf(designer) === index;
  });

  if (router.pathname.includes("search")) {
    return (
      <CartStateContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
          <Nav />
          <main className="overflow-y-hidden">
            <div className="flex min-h-screen w-screen justify-center">
              <div className="lg:flex w-full max-w-7xl justify-center lg:space-x-4 relative">
                <SearchLeftNav uniqueDesigners={uniqueDesigners} />
                <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-max">
                  {children}
                </div>
                <SearchRightNav />
              </div>
            </div>
          </main>
          <Footer />
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>
    );
  }

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
