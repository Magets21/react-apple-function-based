// Steps to follow for question 2
// ● Create a functional component called “Iphone.js” where you will fetch your Apple products
// that you stored in your Database
// ● Make sure your Database is running
// ● You are creating a React based Apple website that has multiple routes. Therefore, make sure
// you create a new route for your “Iphone” page as well
// ● You are responsible for styling your “Iphone” component

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3001/iphones") local host

    //remote server
    // fetch(process.env.REACT_APP_IPHONE_PAGE_ROUTE)
    fetch("http://localhost:1234/iphones")
      .then((res) => res.json())
      .then((data) => {
        const product = data.products;
        setProducts(product);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, []);
  console.log(products);

  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 py-3">
              <div className="title-wraper font-weight-bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let productPage = "/iphone/" + id;
            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="product" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
