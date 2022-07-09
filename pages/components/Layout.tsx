import { PropsWithChildren } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
