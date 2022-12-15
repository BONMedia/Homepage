import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../../utils";

const MetaDataFour = ({ metaData }) => {

  return (
    <>
      <blockquote className="blockquote blockquote__with-image m-t-xs-0 m-b-xs-30">
        <figure>
			<Image
			src={metaData.featureImg} 
			alt={metaData.title}
			height={212}
			width={285}
			/>
        </figure>
        <p>{metaData.quoteText}</p>
      </blockquote>
      <div className="post-title-wrapper m-b-xs-30">
        <h2 className="m-b-xs-0 axil-post-title hover-line">{metaData.title}</h2>
        <div className="post-metas banner-post-metas m-t-xs-20">
          <ul className="list-inline">
            <li>
            {data.author_name && (
                    <div className="caption-meta">
                      <span>By {data.author_name}</span>
                    </div>
                  )}
            </li>
            <li>
              <i className="dot">.</i>{metaData.date_created}
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
    </>
  );
};

export default MetaDataFour;
