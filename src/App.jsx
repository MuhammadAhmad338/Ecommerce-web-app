import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Category from "./Components/Category/Category";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Newsletter from "./Components/Footer/Newsletter/Newsletter";
import SignIn from "./Components/Auth/SignIn/SignIn";
import SignUp from "./Components/Auth/SignUP/SignUp";

function App() {
    return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />  
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
    );
};

export default App;
