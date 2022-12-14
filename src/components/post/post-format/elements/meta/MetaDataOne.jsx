import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { slugify } from "../../../../../utils";
import copy from "../../../../../assets/copy.svg";
import print from "../../../../../assets/print.svg";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { useRouter } from "next/router";
import ReactToPrint from "react-to-print";
import PostLayoutPrint from "../../../layout/PostLayoutPrint";

const MetaDataOne = ({ metaData, postData, allData }) => {
  const componentRef = useRef(null);
  const router = useRouter();
  const url = `https://www.busan.com/view/busan/view.php?code=2022121215573588772&recCode=preset&invenCode=vnmWeVaU&pageSeq=376ec80f61d02018f25d7b800d3bf0e0`;

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = url;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <div className="banner banner__single-post banner__standard">
      <div className="container">
        <div className="row align-items-center">
          <div>
            <h2 className="m-t-xs-20 m-b-xs-0 axil-post-title hover-line">
              {metaData.title}
            </h2>
          </div>
          <div>
            <div className="post-title-info">
              <div>
                <span className="author-name">
                  입력: {metaData.date_created}
                </span>
                <span className="author-name">
                  수정: {metaData.date_edited}
                </span>
              </div>
              <div className="post-title-social">
                <FacebookShareButton
                  className="share-button"
                  url={url} //eg. https://www.example.com
                  quotes={"quotes"} //"Your Quotes"
                  hashtag={"hashtag"} // #hashTag
                >
                  <FacebookIcon size={32} />
                </FacebookShareButton>
                <TwitterShareButton
                  className="share-button"
                  url={url}
                  title={metaData.title}
                >
                  <TwitterIcon size={32} />
                </TwitterShareButton>

                <div
                  className="post-title-button"
                  onClick={() => copyToClipboard()}

                >
                  <Image src={copy} height={"22px"} width="22px" />
                </div>

                <div>
                  <ReactToPrint
                    trigger={() => (
                      <div
                        className="post-title-button"
                        onClick={() => downloadPDF()}
                      >
                        {" "}
                        <Image src={print} height={"22px"} width="22px" />
                      </div>
                    )}
                    content={() => componentRef.current}
                  />
                </div>
              </div>
            </div>
            <div className="post-title-info" >
              {metaData.author_desg}: {metaData.author_name} ({metaData.author_email})
            </div>
          </div>
          <div style={{ display: "none" }}>
          <div ref={componentRef} >
            <PostLayoutPrint
              postData={postData}
              allData={allData}
            />
          </div>
          </div>
         
          {/* <div className="col-lg-6">
              <div className="post-title-wrapper">
                <div className="btn-group">
                    <Link href={`/category/${slugify(metaData.cate)}`}>
                        <a className={`cat-btn ${metaData.cate_bg ?? "bg-color-blue-one"}`}>{metaData.cateKR}</a>
                    </Link>
                </div>
                <h2 className="m-t-xs-20 m-b-xs-0 axil-post-title hover-line">{metaData.title}</h2>
                <div className="post-metas banner-post-metas m-t-xs-20">
                  <ul className="list-inline">
                    <li>
                        <Link href={`/author/${slugify(metaData.author_name)}`}>
                            <a className="post-author post-author-with-img">
                                <Image 
                                    src={metaData.author_img}
                                    alt={metaData.author_name}
                                    width={30}
                                    height={30}
                                />
                                <span className="author-name">{metaData.author_name}</span>
                                
                            </a>
                        </Link>
                    </li>
                    <li>
                        <i className="feather icon-activity" />
                        {metaData.post_views}
                    </li>
                    <li>
                        <i className="feather icon-share-2" />
                        {metaData.post_share}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           */}
          {/* <div className="col-lg-6">
                <div className="post-main-thumbnail">
                    <Image 
                    src={metaData.featureImg}
                    alt={metaData.title}
                    width={540}
                    height={540}
                    className="img-fluid"
                    />
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default MetaDataOne;
