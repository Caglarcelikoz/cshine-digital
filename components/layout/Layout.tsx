import ContactCta from "../ContactCta";
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
      {/* Contact band + footer share one dark backdrop to close every page. */}
      <div className="relative overflow-hidden bg-midnight-900">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800 to-midnight-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_35%)] opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#04C4D4_0%,transparent_35%)] opacity-20" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cshine-blue-500/50 to-transparent" />
        </div>
        <div
          className="absolute inset-0 z-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle at center, #04C4D4 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative z-10">
          <ContactCta />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
