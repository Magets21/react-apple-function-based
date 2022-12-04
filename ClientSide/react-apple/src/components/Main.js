import React from "react";
import FirstThree from "./FirstThree/FirstThree";
import LastThree from "./LastThree/LastThree";
import appleTv from "../commonResource/images/icons/apple-tv-logo.png";
import banker from "../commonResource/images/home/banker.png";
import watchSeries from "../commonResource/images/icons/watch-series5-logo.png";
import arcade from "../commonResource/images/icons/arcade.png";

import YoutubeVideos from "./YoutubeVideos";

function Main() {
  return (
    <div>
      <section className="alert-section top-50">
        <div className="container">
          <div className="alert-title">We’re open for you.</div>
          <div className="alert-text">
            Our retail stores are closed, but you can buy our products here
            online and get fast, free delivery. If you need help finding the
            right product or have a question on your order, chat online with a
            Specialist or call 1-800-MY-APPLE.
            <br />
            For service and support, visit
            <a href="https://support.apple.com/">support.apple.com</a>.
          </div>
        </div>
      </section>
      <FirstThree
        myFirstThreeClass="first-hightlight-wrapper"
        newAlert="New"
        titleWrapperBlack="iPad Pro"
        learnMore="Learn More"
        orderOrBuy="Order"
        iPodPrice="iPad Pro available starting 3.25"
        magicKeyboard="Magic Keyboard coming in May"
      />

      <FirstThree
        myFirstThreeClass="second-hightlight-wrapper"
        newAlert="New"
        titleWrapperBlack="MacBook Air"
        descriptionWrapperBlack="Twice the speed. Twice the storage."
        priceWrapperGrey="From $999."
        learnMore="Learn More"
        orderOrBuy="Buy"
      />

      <FirstThree
        myFirstThreeClass="third-hightlight-wrapper"
        whiteTitle="iPhone 11 Pro"
        whiteDescription="Pro cameras. Pro display. Pro performance."
        whitePriceWrapper="From $24.95/mo. or $599 with trade‑in."
        learnMore="Learn More"
        orderOrBuy="Order"
      />
      <LastThree
        myLastThreeClass="fourth-heghlight-wrapper"
        titleWrapper="iPhone 11"
        descriptionWrapper="Just the right amount of everything."
        priceWrapper="From $18.70/mo. or $499 with trade‑in."
        learnMore="Learn More"
        buyOrApplyNow="Apply Now"
        rightTitleWhite="Get the latest CDC response to COVID-19."
        watchPSA="Watch the PSA"
      />
      <LastThree
        myLastThreeClass="fifth-heghlight-wrapper"
        appleTvLogo={appleTv}
        bankerImage={banker}
        watchNowDescription="Watch now on the Apple TV App"
        watcSeriesLogo={watchSeries}
        rightDescription1="With the Always-On Retina display."
        rightDescription2="You’ve never seen a watch like this."
        learnMoreRight="Learn more"
        buyOrApplyNowRight="Buy"
      />

      <LastThree
        myLastThreeClass="sixth-heghlight-wrapper"
        arcadeImage={arcade}
        watchNowDescription="Agent 8 is a small hero on a big mission."
        playNow="Play now"
        learnAbout="Learn about Apple Arcade"
        titleWrapper2="Apple Card Monthly Installments"
        rightDescription3="Pay for your next iPhone over time, interest-free with Apple
                Card."
        learnMoreRight="Learn more"
        buyOrApplyNowRight="Apply now"
      />
      <YoutubeVideos />
    </div>
  );
}
export default Main;
