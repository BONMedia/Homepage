import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderOne from "../components/header/HeaderOne";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionFour from "../components/post/PostSectionFour";
import PostSectionOne from "../components/post/PostSectionOne";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
import PostSectionTwo from "../components/post/PostSectionTwo";
import PostSectionEight from "../components/post/PostSectionEight";
import PostSectionSeven from "../components/post/PostSectionSeven";
import HeaderTwo from "../components/header/HeaderTwo";
import HeaderThree from "../components/header/HeaderThree";
import HeaderFour from "../components/header/HeaderFour";
import HeaderFive from "../components/header/HeaderFive";
import InfiniteSlider from "../components/slider/InfiniteSlider";
const HomeOne = ({allPosts}) => {
 
  return ( 
    <>
    <HeadMeta metaTitle="BON Media"/>
    <HeaderOne />
    {/* <InfiniteSlider/> */}
    <PostSectionOne postData={allPosts} />
    <PostSectionTwo postData={allPosts}  adBanner={true}/>
   
    <PostSectionFive postData={allPosts} adBanner={true} />
    {/* <PostSectionSix postData={allPosts}/>
    <PostSectionSeven postData={allPosts} />
    <PostSectionEight postData={allPosts} /> */}

   
    <FooterTwo/>
    </>
   );
}
 
export default HomeOne;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'postFormat',
    'trending',
    'story',
    'slug',
    'title',
    'excerpt',
    'featureImg',
    'cate',
    'cateKR',
    'cate_bg',
    'cate_img',
    'author_name',
    'author_desg',
    'author_email',
    'date_created',
		'date_edited',
    'post_views',
    'post_share',
  ])
  
  return {
    props: { allPosts }
  }
}

