import Image from "next/image";
import Link from "next/link";
import SocialLink from "../../data/social/SocialLink.json";

const FooterTwo = () => {
  return (
    <footer className="page-footer bg-grey-dark-key">
      <div className="custom-fluid-container">
        <div className="footer-mid pt-0">
          <div className="row align-items-center">
            <div className="col-md">
              <div className="footer-logo-container">
                <Link legacyBehavior href="/">
                  <a>
                    <Image
                      src="/images/Primary_white.png"
                      alt="footer logo"
                      className="footer-logo"
                      width={86}
                      height={28}
                    />
                  </a>
                </Link>
              </div>
              {/* End of .brand-logo-container */}
            </div>
            {/* End of .col-md-6 */}
            <div className="col-md-auto">
              <div className="footer-social-share-wrapper">
                <div className="footer-social-share">
                  <div className="axil-social-title">Find us here</div>
                  <ul className="social-share social-share__with-bg">
                    <li>
                      <a href={SocialLink.fb.url}>
                        <i className={SocialLink.fb.icon} />
                      </a>
                    </li>
                    <li>
                      <a href={SocialLink.twitter.url}>
                        <i className={SocialLink.twitter.icon} />
                      </a>
                    </li>
                    <li>
                      <a href={SocialLink.telegram.url}>
                        <i className={SocialLink.telegram.icon} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End of .footer-social-share-wrapper */}
            </div>
            {/* End of .col-md-6 */}
          </div>
          {/* End of .row */}
        </div>

        {/* End of .footer-mid */}
        <div className="footer-bottom">
          <ul className="footer-bottom-links">
            <li>
              <Link legacyBehavior href="/">
                <a>????????????</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a>??????</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a>?????? ??? ??????</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a>????????????</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a>?????????????????????</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a>???????????? ????????????</a>
              </Link>
            </li>
          </ul>
          {/* End of .footer-bottom-links */}

          <ul>
            <li>[48789] ????????? ?????? ???????????? 365 (?????????)</li>
            <li>???????????? : 051)461-4114</li>
            <li>????????? : admin@bonmedia.kr</li>
          </ul>

          <ul>
            <li>?????????: ?????????</li>
            <li>???????????????: 180111-1473238</li>
            <li>?????????: 2022.11.17</li>
            <li>????????????: 2023.01.01??????</li>
         
            <li>?????????: ?????????</li>
            <li>?????????: ?????????</li>
          </ul>

          <p className="axil-copyright-txt">
          ?????? ???????????? ????????????, ??????, ????????? ????????? ?????? ???????????? ?????? ??????????????? ????????????, ?????? ????????? ?????? ??? ????????????.
          </p>
          <p className="axil-copyright-txt">
           COPYRIGHT  ?? 2023 ??????????????? ALL RIGHTS RESERVED
          </p>
        </div>
        {/* End of .footer-bottom */}
      </div>
      {/* End of .container */}
    </footer>
  );
};

export default FooterTwo;
