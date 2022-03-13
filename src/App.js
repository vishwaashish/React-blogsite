
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/scss/style.css'
import { HashRouter, Route, Routes, } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "./Component/Loader/Loader";
import Scrolltoup from "./Component/Scrolltoup/Scrolltoup";

const Blog = React.lazy(() => import('./pages/Post/Blog'));
const Home = React.lazy(() => import('./pages/Home'));
const SinglePostPage = React.lazy(() => import('./pages/Post/SinglePostPage'))

function App() {
  return (
    <div className="App ">
      <Suspense fallback={<Loader h="100vh" />}>
        <Scrolltoup />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<SinglePostPage />} />
            <Route path="/post" element={<SinglePostPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </HashRouter>
      </Suspense>

    </div>
  );
}

export default App;
