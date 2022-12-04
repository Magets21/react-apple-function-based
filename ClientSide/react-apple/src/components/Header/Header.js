import React from "react";
import { Link } from "react-router-dom";
import "../../commonResource/css/bootstrap.css";

function Header(props) {
  return (
    <div className={props.myHeaderClass}>
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          {/* Link tag replaces anchor tag so that pages not to refresh when clicked. This means when we click elements with Link tag, we don't lose previous states we have*/}
          <Link className="navbar-brand mx-auto" to={props.urlLogo}>
            <img src={props.logoImage} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={props.urlMac}>
                  {props.Mac}
                </a>
              </li>
              <li className="nav-item">
                {/* Link tag replaces anchor tag so that pages not to refresh when clicked. This means when we click elements with Link tag, we don't lose previous states we have*/}
                <Link
                  className="nav-link js-scroll-trigger"
                  to={props.urlIphone}
                >
                  {props.iPhone}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={props.urlIpad}>
                  {props.iPad}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={props.urlWatch}>
                  {props.Watch}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={props.urlTv}>
                  {props.Tv}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={props.urlMusic}>
                  {props.Music}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href={props.urlSupport}
                >
                  {props.Support}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href={props.urlSearch}
                >
                  <img src={props.searchImage} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={props.urlCart}>
                  <img src={props.cartImage} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
