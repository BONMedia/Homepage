import AdBanner from "../common/AdBanner";
import WidgetAd from "../widget/WidgetAd";
import WidgetCategory from "../widget/WidgetCategory";
import WidgetInstagram from "../widget/WidgetInstagram";
import WidgetNewsletter from "../widget/WidgetNewsletter";
import WidgetPost from "../widget/WidgetPost";
import WidgetSocialShare from "../widget/WidgetSocialShare";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionFive = ({postData, adBanner, pClass}) => {
    const uniqueIds = [];

    const unique = postData.filter(post => {
        const isDuplicate = uniqueIds.includes (post.cate)
        if (!isDuplicate) {
            uniqueIds.push(post.cate);
        
            return true;
          }
        
          return false;
    })

 return ( 
        <div className={`random-posts ${pClass ?? "section-gap"}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {adBanner === true ? <AdBanner /> : "" }
                        <div className="axil-content">
                            {unique.map((data) => (
                                <PostLayoutTwo data={data} postSizeMd={true} key={data.slug}/>
                            ))}

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-sidebar">
                            <WidgetAd />
                            <WidgetNewsletter />
                            <WidgetCategory cateData={postData} />
                            {/* <WidgetSocialShare /> */}
                            <WidgetPost dataPost={postData} />
                            {/* <WidgetInstagram /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default PostSectionFive;