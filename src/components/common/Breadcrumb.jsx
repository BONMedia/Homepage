import Link from "next/link";
import { slugify } from "../../utils";

const Breadcrumb = ({bCat, aPage, cLink}) => {
  return (
    <div className="breadcrumb-wrapper">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link legacyBehavior  href="/">
                    <a>Home</a>
                </Link>
            </li>
            {cLink &&  bCat? 
            <li className="breadcrumb-item">
                <Link legacyBehavior   href={`/category/${slugify(cLink)}`} >
                    <a>{bCat}</a>
                </Link>
            </li>: ""
            }
            <li className="breadcrumb-item active" aria-current="page">{aPage}</li>
          </ol>
          {/* End of .breadcrumb */}
        </nav>
      </div>
      {/* End of .container */}
    </div>
  );
};

export default Breadcrumb;
