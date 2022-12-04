import React from "react";

function FirstThree(props) {
  return (
    <section className={props.myFirstThreeClass}>
      <div className="container">
        <div className="new-alert">{props.newAlert}</div>
        {props.whiteTitle && (
          <div className="title-wraper bold">{props.whiteTitle}</div>
        )}

        {props.whiteDescription && (
          <div className="description-wrapper">{props.whiteDescription}</div>
        )}
        {props.whitePriceWrapper && (
          <div className="price-wrapper">{props.whitePriceWrapper}</div>
        )}

        {props.titleWrapperBlack && (
          <div className="title-wraper bold black">
            {props.titleWrapperBlack}
          </div>
        )}

        {props.descriptionWrapperBlack && (
          <div className="description-wrapper black">
            {props.descriptionWrapperBlack}
          </div>
        )}

        {props.priceWrapperGrey && (
          <div className="price-wrapper grey">{props.priceWrapperGrey}</div>
        )}

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">{props.learnMore}</a>
            </li>
            <li>
              <a href="">{props.orderOrBuy}</a>
            </li>
          </ul>
        </div>
        <div className="ipod-caption row">
          <div className="col-sm-12 col-md-6 text-md-right">
            {props.iPodPrice}
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            {props.magicKeyboard}
          </div>
        </div>
      </div>
    </section>
  );
}
export default FirstThree;
