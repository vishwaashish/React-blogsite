import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Navbar from "./component/Header/Navbar";
import Loader from "./component/Loader/Loader";
import ScrollToTop from "./component/scrollToTop";
import "./assets/scss/style.css";
import AnimatePage from "./component/animatePage";
import Footer from "./component/footer";

const Blog = React.lazy(() => import("./pages/post/Blog"));
const Home = React.lazy(() => import("./pages/Home"));
const SinglePostPage = React.lazy(() => import("./pages/post/SinglePostPage"));

function App() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
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
  return <Suspense fallback={<Loader h="100vh" />}>{elements}</Suspense>;
}

export default App;
