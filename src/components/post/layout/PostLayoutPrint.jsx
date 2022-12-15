import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutPrint = ({ postData, allData }) => {
  const basePathLink =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASEPATH ?? ""
      : "";

  const postContent = postData.content.replace(
    "/images//g",
    basePathLink + "/images/"
  );

  return (
    <div className="print"  >
      <Image src="/images/Primary_black.png" height={150} width={305} alt='logo'/>
      <div className="banner banner__single-post banner__print">
        <div className="container">
          <div className="row align-items-center">
            <div>
              <h2 className="m-t-xs-20 m-b-xs-0 axil-post-title hover-line">
                {postData.title}
              </h2>
            </div>
            <div>
              <div className="post-title-info">
                <div>
                  <span className="author-name">
                    입력: {postData.date_created}
                  </span>
                  <span className="author-name">
                    수정: {postData.date_edited}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-single-wrapper p-t-xs-30">
        <div className="print-container">
          <div style={{padding:'0px 30px'}}>
            <div className="">
            <blockquote className="article-blockquote">{postData.excerpt}</blockquote>
              <main className="site-main">
                <article className="post-details">
                  <div className="single-blog-wrapper" >
                    {/* <SocialShareSide /> */}
                    <div
                      dangerouslySetInnerHTML={{ __html: postContent }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    ></div>
                  </div>
                  <div className="post-bottom">
                    <div className="post-bottom-text">{postData.author_desg} {postData.author_name} {postData.author_email}</div>
                    <div className="post-bottom-text">ⓒ 부산일보(www.busan.com), 무단전재 및 수집, 재배포금지</div>
                    </div>
                </article>
                {/* <SocialShareBottom />
				  <hr className="m-t-xs-50 m-b-xs-60" />
				  <PostAuthor authorData={postData}/>
				  <PostComment /> */}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLayoutPrint;
