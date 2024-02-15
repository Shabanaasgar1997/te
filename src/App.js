import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menubar from "./Components/Menubar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Banner from "./Components/Banner";
import Products from "./Pages/Products";
import Form from "./Components/Form";
import State from "./HOOKS/State";
import Effects from "./HOOKS/Effect/Effects";
import ProductPage from "./Pages/ProductPage";
import Parent from "./HOOKS/Context/Parent";
import Red from "./HOOKS/Reducer/Red";
import Ref from "./HOOKS/Ref/Ref";
import MemoC from "./HOOKS/Memo/MemoC";
import Back from "./HOOKS/Callback/Back";
import Cart from "./HOOKS/Effect/Cart";

function App() {
  let count = 1;
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About prp1={count} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/products" element={<Products />} />
        <Route path="/form" element={<Form />} />

        <Route path="/states" element={<State />} />
        <Route path="/effects" element={<Effects />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/context" element={<Parent />} />
        <Route path="/red" element={<Red />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/memo" element={<MemoC />} />
        <Route path="/call" element={<Back />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/*" element={<PageNotFound />}>
          <Route path=":name" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
