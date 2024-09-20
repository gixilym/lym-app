import propTypes from "prop-types";
import Background from "./Background";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 font-ubuntu">
      <Header />
      <Background />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
