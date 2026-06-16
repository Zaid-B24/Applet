import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contact";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { WebDevelopment } from "./pages/WebDevelopment";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/web-development" element={<WebDevelopment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
