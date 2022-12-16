import { useRef, useEffect } from "react";
import FormGroup from "../contact/FormGroup";

const WidgetNewsletter = () => {
  var menuRef = useRef();

  const submit = (e) => {
    e.preventDefault();

    const dropdownSelect = menuRef.current.childNodes;
    let dropdownList = [];

    for (let i = 0; i < dropdownSelect.length; i++) {
      const element = dropdownSelect[i];
      if (element.classList.contains("subscriptionform")) {
        dropdownList.push(element);
      }
    }

    const formEle = dropdownList[0];

    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzB6GSKmqzTuUo7LY0Hr-514IktQiHYm8-1tlnLKYJVfEw41OYj6tmjGp4B6WAlyDcQ/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
       alert("Successfully Subscribed");
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="newsletter-widget weekly-newsletter bg-grey-light-three m-b-xs-40">
      <div className="newsletter-content">
        <div className="newsletter-icon">
          <i className="feather icon-send" />
        </div>
        <div className="section-title">
          <h3 className="axil-title">뉴스레터 구독</h3>
          <p className="mid m-t-xs-10 m-b-xs-20">
            지금 가장 HOT한 블록체인, 가상자산 뉴스 받아보기
          </p>
        </div>
        {/* End of .section-title */}
        <div className="subscription-form-wrapper" ref={menuRef}>
          <form onSubmit={submit} className="subscriptionform">
            <FormGroup
              pClass="form-group-small m-b-xs-20"
              type="text"
              name="Email"
              label=" Enter Email Address"
            />
            <div className="m-b-xs-0">
              <button className="btn btn-primary btn-small">
                구독 신청하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WidgetNewsletter;
