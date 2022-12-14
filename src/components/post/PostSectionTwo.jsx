import SectionTitle from "../elements/SectionTitle";
import PostLayoutThree from "./layout/PostLayoutThree";
import AdBanner from "../common/AdBanner";
const PostSectionTwo = ({ postData }) => {

  const storyPost = postData.filter(post => post.story === true);

  return (
    <div className="section-gap section-gap-top__with-text top-stories bg-grey-light-three" >
      <div className="container">
      <AdBanner width={'1456'} height={'180'}/>
        <SectionTitle title="Hot Topics" btnText="All Hot Topics" />
        <div className="row">
          <div className="col-lg-8">
          	{storyPost.slice(0, 1).map((data) => (
				<PostLayoutThree data={data} postSizeLg={true} key={data.slug}/>
			))}
          </div>
		  <div className="col-lg-4">
		  	{storyPost.slice(1, 3).map((data) => (
				<PostLayoutThree data={data} key={data.slug}/>
			))}
		  </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTwo;
