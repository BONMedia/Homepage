import SectionTitle from "../elements/SectionTitle";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionThree = ({ postData }) => {

const trendingPost = postData.filter(post => post.trending === true);

  return (
    <div className="section-gap section-gap-top__with-text trending-stories" style={{border:'1px solid purple'}}>
      <div className="container">
        <SectionTitle title="Trending Stories" btnText="ALL TRENDING STORIES" />
      <div className="row">
        {trendingPost.slice(0, 6).map((data) => (
          <div className="col-lg-6" key={data.slug}>
              <PostLayoutTwo data={data}/>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default PostSectionThree;
