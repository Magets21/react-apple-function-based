import React from "react";
import Header from "./Header";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";

function HeaderLink() {
  return (
    <Header
      myHeaderClass="nav-wrapper fixed-top"
      logoImage={logo}
      urlLogo="/"
      Mac="Mac"
      urlMac="/mac/"
      iPhone="iPhone"
      urlIphone="/iphone/"
      iPad="iPad"
      urlIpad="/ipad/"
      Watch="Watch"
      urlWatch="/watch/"
      Tv="tv"
      urlTv="/tv/"
      Music="Music"
      urlMusic="/music/"
      Support="Support"
      urlSupport="/support/"
      searchImage={search}
      urlSearch="/search/"
      cartImage={cart}
      urlCart="/cart/"
    />
  );
}

export default HeaderLink;
