import "@fortawesome/fontawesome-free/css/all.min.css";
import { AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import AnimatePage from "./Component/AnimatePage";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Header/Navbar";
import Loader from "./Component/Loader/Loader";
import Scrolltoup from "./Component/Scrolltoup/Scrolltoup";
import "./assets/scss/style.css";
// import Home from "./pages/Home";
// import Blog from "./pages/Post/Blog";
// import SinglePostPage from "./pages/Post/SinglePostPage";

const Blog = React.lazy(() => import("./pages/Post/Blog"));
const Home = React.lazy(() => import("./pages/Home"));
const SinglePostPage = React.lazy(() => import("./pages/Post/SinglePostPage"));

function App() {
  const location = useLocation();
  const elements = useRoutes([
    {
      path: "/",
      element: <AnimatePage children={<Home />} />,
    },
    {
      path: "/blog",
      element: <AnimatePage children={<Blog />} />,
    },
    {
      path: "/post/:id",
      element: <AnimatePage children={<SinglePostPage />} />,
    },
    {
      path: "*",
      element: <AnimatePage children={<Home />} />,
    },
  ]);
  return (
    <Suspense fallback={<Loader h="100vh" />}>
      <Scrolltoup />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(elements, { key: location.pathname })}

        {/* <Routes key={location.pathname} location={location}>
          <Route path="/" element={<AnimatePage children={<Home />} />} />
          <Route path="/blog" element={<AnimatePage children={<Blog />} />} />
          <Route
            path="/post/:id"
            element={<AnimatePage children={<SinglePostPage />} />}
          />
          <Route path="*" element={<AnimatePage children={<Home />} />} />
        </Routes> */}
        <Footer />
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
