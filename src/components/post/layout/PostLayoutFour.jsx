import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutFour = ({ data }) => {
  return (
    <div className="content-block m-b-xs-30">
		<Link legacyBehavior  href={`/post/${data.slug}`}>
			<a>
				<Image
					src={data.featureImg}
					alt={data.title}
					width={255}
					height={255}
					className="img-fluid"
				/>
				<div className="grad-overlay" />
			</a>
	  </Link>
      <div className="media-caption">
        <div className="caption-content">
          <h3 className="axil-post-title hover-line hover-line">
		  		<Link legacyBehavior  href={`/post/${data.slug}`}>
					<a>{data.title}</a>
				</Link>
          </h3>
		  {data.author_name &&  <div className="caption-meta">
		  		<span>By {data.author_name}</span>
          </div>}
         
        </div>
        {/* End of .content-inner */}
      </div>
    </div>
  );
};

export default PostLayoutFour;
