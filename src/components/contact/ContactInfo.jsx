import SocialLink from "../../data/social/SocialLink.json";

const ContactInfo = () => {
  return (
    <div className="axil-contact-info-wrapper p-l-md-45 m-b-xs-30">
      <div className="axil-contact-info-inner">
        <h2 className="h4 m-b-xs-10">Contact Information</h2>
        <div className="axil-contact-info">
          <address className="address">
            <p className="mid m-b-xs-30">
              [48789] 부산시 동구 중앙대로 365 (수정동)
              <br />
            </p>
            <div className="h5 m-b-xs-10">
              We&apos;re Available 24/ 7. Call Now.
            </div>
            <div>
              <p className="tel">
                <i className="fas fa-phone" />
                (051) 461-4114
              </p>
              <br></br>
              <p className="tel">
                <i className="fas fa-envelope" />
                admin@bonmedia.kr
              </p>
            </div>
            <div>
            <p className="tel">
              <i className="fas fa-building" />
             사업자번호: 180111-1473238</p>
            </div>
          </address>
          {/* End of address */}
          <div className="contact-social-share m-t-xs-30">
            <div className="axil-social-title h5">Follow Us</div>
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
      </div>
    </div>
  );
};

export default ContactInfo;
