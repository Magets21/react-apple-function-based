import React from "react";

function LastThree(props) {
  return (
    <div>
      <section className={props.myLastThreeClass}>
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                {props.appleTvLogo && (
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={props.appleTvLogo} />
                    </div>
                  </div>
                )}
                {props.arcadeImage && (
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={props.arcadeImage} />
                    </div>
                  </div>
                )}

                {props.bankerImage && (
                  <div className="tvshow-logo-wraper">
                    <img src={props.bankerImage} />
                  </div>
                )}

                <div className="watch-more-wrapper">
                  <a href="#">{props.watchNowDescription}</a>
                </div>
                <div className="title-wraper">{props.titleWrapper}</div>
                <div className="description-wraper">
                  {props.descriptionWrapper}
                </div>
                <div className="price-wrapper">
                  {props.priceWrapper}
                  <sup>1</sup>
                </div>

                <div className="links-wrapper">
                  {props.learnMore && (
                    <ul>
                      <li>
                        <a href="">{props.learnMore}</a>
                      </li>
                      <li>
                        <a href="">{props.buyOrApplyNow}</a>
                      </li>
                    </ul>
                  )}
                </div>
                {props.learnAbout && (
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="">
                          {props.playNow}
                          <sup>2</sup>
                        </a>
                      </li>
                      <li>
                        <a href="">{props.learnAbout}</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                {props.titleWrapper2 && (
                  <div className="title-wraper">{props.titleWrapper2}</div>
                )}
                {props.rightDescription3 && (
                  <div className="description-wraper">
                    {props.rightDescription3}
                  </div>
                )}
                {/* gggggggggggg */}
                {props.watcSeriesLogo && (
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={props.watcSeriesLogo} />
                    </div>
                  </div>
                )}
                {props.rightDescription1 && (
                  <div className="description-wraper">
                    {props.rightDescription1}
                    <br />
                    {props.rightDescription2}
                  </div>
                )}
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">{props.learnMoreRight}</a>
                    </li>
                    <li>
                      <a href="">{props.buyOrApplyNowRight}</a>
                    </li>
                  </ul>
                </div>
                {/* hhhhhhhhhhhhhhhhh */}
                <div className="title-wraper white">
                  {props.rightTitleWhite}
                </div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href=""> {props.watchPSA} </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default LastThree;
