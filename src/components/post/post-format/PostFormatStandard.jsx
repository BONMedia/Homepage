import WidgetAd from "../../widget/WidgetAd";
import WidgetInstagram from "../../widget/WidgetInstagram";
import WidgetNewsletter from "../../widget/WidgetNewsletter";
import WidgetPost from "../../widget/WidgetPost";
import WidgetSocialShare from "../../widget/WidgetSocialShare";
import MetaDataOne from "./elements/meta/MetaDataOne";
import PostAuthor from "./elements/PostAuthor";
import PostComment from "./elements/PostComment";
import SocialShareBottom from "./elements/SocialShareBottom";
import SocialShareSide from "./elements/SocialShareSide";


const PostFormatStandard = ({postData, allData}) => {
  const basePathLink = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? "" : "";
  
  const postContent = postData.content.replace('/images//g', basePathLink + '/images/');

    return (
      <>
        <MetaDataOne metaData={postData} postData={postData} allData={allData}/>
        <div className="post-single-wrapper p-t-xs-60" style={{fontSize: '10px'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <main className="site-main">
                  <article className="post-details">
                    <div className="single-blog-wrapper">
                      {/* <SocialShareSide /> */}
                      <div dangerouslySetInnerHTML={{__html: postContent}}></div>
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
              <div className="col-lg-4">
                <div className="post-sidebar">
                  <WidgetAd />
                  <WidgetNewsletter />
                  <WidgetPost dataPost={allData} />
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default PostFormatStandard;