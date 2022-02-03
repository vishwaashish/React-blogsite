
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/scss/style.css'
import { HashRouter, Route, Routes, } from "react-router-dom";
import SinglePostPage from "./pages/Post/SinglePostPage";
import Home from "./pages/Home";
import Blog from "./pages/Post/Blog";

function App() {
  return (
    <div className="App ">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/page" component={HashLinkPage} />/ */}
          {/* <Route path="#footer" element={<Home />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/post" element={<SinglePostPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
