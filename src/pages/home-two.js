import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderTwo from "../components/header/HeaderTwo";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionSeven from "../components/post/PostSectionSeven";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
import SliderOne from "../components/slider/SliderOne";

const HomeTwo = ({allPosts}) => {

  return ( 
    <>
    <HeadMeta metaTitle="Home Two"/>
    <HeaderTwo />
    <SliderOne slidePost={allPosts} />
    <PostSectionThree postData={allPosts} />
    <PostSectionSeven postData={allPosts} />
    <PostSectionFive postData={allPosts} />
    <PostSectionSix postData={allPosts} />
    <FooterTwo />
    </>
   );
}
 
export default HomeTwo;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'postFormat',
    'story',
    'trending',
    'title',
    'excerpt',
    'featureImg',
    'cate',
    'cateKR',
    'cate_bg',
    'cate_img',
    'author_name',
    'author_desg',
    'author_img',
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

