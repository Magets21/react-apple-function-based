// Steps to Follow for Question 3
// ● Create a functional component called “SingleAppleProduct.js” where you will fetch your
// Apple products that you stored in your Database
// ● You will need to specify the unique identifier of each product you have in your database.
// You used “pid” as a unique ID when you created your tables in your database.
// ○ You will pass this identification as a parameter when you provide the route on your
// App.js. Meaning, when iphone/:id is entered as a URL, your
// “SingleAppleProduct.js” will load to show the single product you fetched from
// your Database using API
// ● Make sure your Database is running
// ● You are responsible for styling your “SingleAppleProduct.js” component

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Four04 from "./Four04";

function SingleAppleProduct() {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();
  ////   console.log(productID);
  // console.log(useParams());
  // console.log(product);
  useEffect(() => {
    fetch("http://localhost:1234/iphones")
      .then((res) => res.json())
      .then((data) => {
        ////products shown below is array (a name of array or list of products in our database)
        const productList = data.products;
        const singleProductUrl = productList.filter(
          (product) => product.product_url === productID
        );
        setProduct(singleProductUrl);
      })
      .catch(() => console.log("Error: Unable to fetch data"));
  }, [productID]);

  if (product.length) {
    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            {product.map((product) => {
              let id = product.product_id;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              let details = product.product_description;

              let productDiv = (
                <div key={id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5">
                      <div className="title-wraper font-weight-bold">
                        {title}
                      </div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} alt="product" />
                      </div>
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
  } else {
    return <Four04 />;
  }
}

export default SingleAppleProduct;
