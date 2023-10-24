import { memo } from "react";
import ScrollToTop from "../scrollToTop";
import Navbar from "../Header/Navbar";
import Footer from "../footer";
const AnimatePage = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default memo(AnimatePage);
