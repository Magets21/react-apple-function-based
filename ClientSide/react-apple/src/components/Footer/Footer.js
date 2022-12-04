import React from "react";

function Footer(props) {
  return (
    <footer className={props.myFooterClass}>
      <div className="container">
        <div className="upper-text-container">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
            >
              Customer Agreement
            </a>
            . Additional iPhone Payments terms are
            <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              here
            </a>
            .
          </p>
          <p>
            2. Subscription required.
            <br />
            <br />
            Magic Keyboard sold separately.
            <br />
            <br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <a href="https://www.apple.com/promo/">terms </a> apply.
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3>Shop and Learn</h3>
            <ul>
              <li>
                <a href="#">{props.mac}</a>
              </li>
              <li>
                <a href="#">{props.iPad}</a>
              </li>
              <li>
                <a href="#">{props.iPhone}</a>
              </li>
              <li>
                <a href="#">{props.watch}</a>
              </li>
              <li>
                <a href="#">{props.TV}</a>
              </li>
              <li>
                <a href="#">{props.music}</a>
              </li>
              <li>
                <a href="#">{props.airPods}</a>
              </li>
              <li>
                <a href="#">{props.homePod}</a>
              </li>
              <li>
                <a href="#">{props.iPodTouch}</a>
              </li>
              <li>
                <a href="#">{props.accessories}</a>
              </li>
              <li>
                <a href="#">{props.giftCards}</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">{props.appleMusic}</a>
              </li>
              <li>
                <a href="#"> {props.appleNews} </a>
              </li>
              <li>
                <a href="#">{props.appleTV}</a>
              </li>
              <li>
                <a href="#">{props.appleArcade}</a>
              </li>
              <li>
                <a href="#">{props.appleCard}</a>
              </li>
              <li>
                <a href="#">{props.iCloud}</a>
              </li>
            </ul>
            <h3>Account</h3>
            <ul>
              <li>
                <a href="#"> {props.manage} </a>
              </li>
              <li>
                <a href="#"> {props.appleStore} Account</a>
              </li>
              <li>
                <a href="#"> {props.iCloudCom} </a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3>Apple Store</h3>
            <ul>
              <li>
                <a href="#"> {props.findStore}</a>
              </li>
              <li>
                <a href="#">{props.geniusBar}</a>
              </li>
              <li>
                <a href="#">{props.today}</a>
              </li>
              <li>
                <a href="#">{props.appleCamp}</a>
              </li>
              <li>
                <a href="#">{props.fieldTrip}</a>
              </li>
              <li>
                <a href="#">{props.appleStoreApp}</a>
              </li>
              <li>
                <a href="#">{props.refurbished}</a>
              </li>
              <li>
                <a href="#">{props.financing}</a>
              </li>
              <li>
                <a href="#">{props.appleTradeIn}</a>
              </li>
              <li>
                <a href="#">{props.orderStatus}</a>
              </li>
              <li>
                <a href="#">{props.shoppingHelp}</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-12 col-md">
            <h3>For Business</h3>
            <ul>
              <li>
                <a href="#">{props.appleAndBusi}</a>
              </li>
              <li>
                <a href="#">{props.shopForBusi}</a>
              </li>
            </ul>
            <h3>For Education</h3>
            <ul>
              <li>
                <a href="#">{props.appleAndEduc}</a>
              </li>
              <li>
                <a href="#">{props.shopForCollege}</a>
              </li>
            </ul>
            <h3>For Healthcare</h3>
            <ul>
              <li>
                <a href="#">{props.manageAppleID}</a>
              </li>
              <li>
                <a href="#">{props.applesStoreAcc}</a>
              </li>
              <li>
                <a href="#">{props.iCloudCom2}</a>
              </li>
            </ul>
            <h3>For Government</h3>
            <ul>
              <li>
                <a href="#">{props.appleAndEduc2}</a>
              </li>
              <li>
                <a href="#">{props.shopForCollege2}</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3>Apple Values</h3>
            <ul>
              <li>
                <a href="#"> {props.findStore2}</a>
              </li>
              <li>
                <a href="#">{props.geniusBar2}</a>
              </li>
              <li>
                <a href="#">{props.today2}</a>
              </li>
              <li>
                <a href="#">{props.appleCamp2}</a>
              </li>
              <li>
                <a href="#">{props.fieldTrip2}</a>
              </li>
              <li>
                <a href="#">{props.appleStoreApp2}</a>
              </li>
            </ul>
            <h3>About Apple</h3>
            <ul>
              <li>
                <a href="#"> {props.findStore3}</a>
              </li>
              <li>
                <a href="#">{props.geniusBar3}</a>
              </li>
              <li>
                <a href="#">{props.today3}</a>
              </li>
              <li>
                <a href="#">{props.appleCamp3}</a>
              </li>
              <li>
                <a href="#">{props.fieldTrip3}</a>
              </li>
              <li>
                <a href="#">{props.appleStoreApp3}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-apple-wrapper">
          More ways to shop: <a href="#">Find an Apple Store</a> or
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper row">
          <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
              <li>
                <a href="#">{props.privacyPolicy}</a>
              </li>
              <li>
                <a href="#">{props.termsOfUse}</a>
              </li>
              <li>
                <a href="#">{props.salesRefunds}</a>
              </li>
              <li>
                <a href="#">{props.legal}</a>
              </li>
              <li>
                <a href="#">{props.siteMap}</a>
              </li>
            </ul>
          </div>
          <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
            <div className="flag-wrapper">
              <img src={props.flag} />
            </div>
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
