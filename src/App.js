import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Component/Loader/Loader";
import Scrolltoup from "./Component/Scrolltoup/Scrolltoup";
import "./assets/scss/style.css";

const Blog = React.lazy(() => import("./pages/Post/Blog"));
const Home = React.lazy(() => import("./pages/Home"));
const SinglePostPage = React.lazy(() => import("./pages/Post/SinglePostPage"));

function App() {
  return (
    <div className="App ">
      <Suspense fallback={<Loader h="100vh" />}>
        <Scrolltoup />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<SinglePostPage />} />
            <Route path="/post" element={<SinglePostPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
