import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Main from "./components/Main";
import Iphone from "./components/Pages/Iphone";
import HeaderLink from "./components/Header/HeaderLink";
import FooterLink from "./components/Footer/FooterLink";
import SingleAppleProduct from "./components/Pages/SingleAppleProduct";
import RandomUser from "./components/RandomUser";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Four04 from "./components/Pages/Four04";

// import Test from "./components/Pages/Test";

function App() {
  return (
    <Router>
      <div>
        <HeaderLink />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/iphone" element={<Iphone />} />
          {/* <Route path="iphone/test" element={<Test />} /> */}
          <Route path="*" element={<Four04 />} />
          <Route path="iphone/:productID" element={<SingleAppleProduct />} />
        </Routes>
        <RandomUser />
        <FooterLink />
      </div>
    </Router>
  );
}

export default App;
