import Contact from "../Contact";
import Hero from "../Hero";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
