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
                <Link href="/">
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
                      <a href={SocialLink.yt.url}>
                        <i className={SocialLink.yt.icon} />
                      </a>
                    </li>
                    <li>
                      <a href={SocialLink.linked.url}>
                        <i className={SocialLink.linked.icon} />
                      </a>
                    </li>
                    <li>
                      <a href={SocialLink.pinterest.url}>
                        <i className={SocialLink.pinterest.icon} />
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
              <Link href="/">
                <a>회사소개</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>문의</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>제보 및 광고</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>이용약관</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>청소년보호정책</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>개인정보 취급방침</a>
              </Link>
            </li>
          </ul>
          {/* End of .footer-bottom-links */}

          <ul>
            <li>[48789] 부산시 동구 중앙대로 365 (수정동)</li>
            <li>전화번호 : 051)461-4114</li>
            <li>이메일 : admin@bonmedia.kr</li>
          </ul>

          <ul>
            <li>대표자: 심준식</li>
            <li>사업자번호: 180111-1473238</li>
            <li>등록일: 2022.11.17</li>
            <li>발행일자: 2023.01.01발행</li>
         
            <li>발행인: 심준식</li>
            <li>편집인: 김종열</li>
          </ul>

          <p className="axil-copyright-txt">
          모든 콘텐츠를 커뮤니티, 카페, 블로그 등에서 무단 사용하는 것은 저작권법에 저촉되며, 법적 제재를 받을 수 있습니다.
          </p>
          <p className="axil-copyright-txt">
           COPYRIGHT  © 2023 비온미디어 ALL RIGHTS RESERVED
          </p>
        </div>
        {/* End of .footer-bottom */}
      </div>
      {/* End of .container */}
    </footer>
  );
};

export default FooterTwo;
