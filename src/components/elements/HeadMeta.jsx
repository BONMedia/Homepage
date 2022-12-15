import Head from 'next/head'
import Link from "next/link";

const HeadMeta = ({metaTitle}) => {
    return ( 
        <Head>
            {/* Basic metas */}
            <meta charSet="utf-8" />
            <meta name="robots" content="noindex, follow" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{`${metaTitle?metaTitle:"BON Media"}`}</title>
         
        </Head>
     );
}
 
export default HeadMeta;