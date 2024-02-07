import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menubar from "./Components/Menubar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<PageNotFound />}>
          <Route path=":name" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
