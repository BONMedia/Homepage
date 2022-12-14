import { getAllPosts } from "../../lib/api";
import CategoryOne from "../components/category/CategoryOne";
import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderThree from "../components/header/HeaderThree";
import PostSectionFive from "../components/post/PostSectionFive";
import SliderTwo from "../components/slider/SliderTwo";

const HomeThree = ({allPosts}) => {

  return ( 
    <>
    <HeadMeta metaTitle="Home Three"/>
    <HeaderThree />
    <SliderTwo slidePost={allPosts} />
    <CategoryOne cateData={allPosts} />
    <PostSectionFive postData={allPosts} pClass="section-gap bg-grey-light-three" />
    <FooterTwo />
    </>
   );
}
 
export default HomeThree;


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

