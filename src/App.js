import Navbar from "./Component/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/scss/style.css'
import store from "./Redux/store";
import { BrowserRouter, HashRouter, Route, Routes, } from "react-router-dom";
import SinglePostPage from "./pages/Post/SinglePostPage";
import Home from "./pages/Home";
import Blog from "./pages/Post/Blog";

function App() {

  // console.log(data, "data");
  return (
    <div className="App ">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
