import moment from 'moment';
import React from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Callgetapibyid } from '../../Api/CallApi';
import { jsondata } from '../../Api/data';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';
import SocialShare from '../../Component/Social share/SocialShare';
import { Helmet } from "react-helmet";

const SinglePostPage = (props) => {
  const navigate = useNavigate()
  const currenthref = window.location.href
  const param = useParams()
  const { data, isLoading } = useQuery(['singlepost', param], async () => {
    try {
      return await Callgetapibyid(param)
    } catch {
      throw new Error("Error")
    }
  })
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [param]);

  const Spinner = () => (
    <div style={{ display: 'flex', height: 400, justifyContent: 'center', alignItems: 'center' }}>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </div >
  )
  const Seo = () => (
    <>
      {
        !isLoading && <>
          <Helmet>
            <meta property="og:title" content={data?.title ?? jsondata[9].title} />
            <meta property="og:type" content={data?.title ?? jsondata[9].title} />
            <meta property="og:image" content={data?.title ?? jsondata[9].title} />
            <meta property="og:url" content={currenthref} />
            <meta name="twitter:card" content={data?.image_lg ?? jsondata[9].image_lg} />
            <meta property="og:description" content={data?.description.length ?? jsondata[9].title.length > 150 ? data?.description.substring(0, 150) ?? jsondata.description.substring(0, 150) : data.description ?? jsondata.description} />
            <meta property="og:site_name" content="Technotaught" />
            <meta name="twitter:image:alt" content={data?.title ?? jsondata[9].title} />

            <title>{data?.title ?? jsondata[9].title}</title>
            <meta name="description" content={data?.description.length ?? jsondata[9].title.length > 150 ? data?.description.substring(0, 150) ?? jsondata.description.substring(0, 150) : data.description ?? jsondata.description} />
          </Helmet>
        </>
      }
    </>
  )

  return (<>
    <Navbar />
    <Seo />
    <SocialShare
      shareparam={data ?? jsondata[9]}
    />
    <div className="singlepage">
      <div className="singlepage-image">
      </div>
      <div className="singlepage-box shadow">
        <div className="singlepage-content">
          {
            !isLoading ? <>
              <i className='fa fa-arrow-alt-circle-left' onClick={() => navigate(-1)} />
              <div className='date'>{moment().format('LL')}</div>
              <h1>{data?.title ?? jsondata[9].title}</h1>
              <div className="break-line">
                <svg >
                  <path d="M 10 10 L 300 10" />
                </svg>
              </div>
              <div className="image">
                {<img src={data?.image_lg ?? jsondata[9].image_lg} loading="lazy" alt={data?.title ?? jsondata[9].title} />}
              </div>
              <div className="description" dangerouslySetInnerHTML={{ __html: data?.description ?? jsondata[9].description }}>
              </div>

              <div className='social-share'>
                <p>Share on</p>
                <ul>
                  <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${currenthref}&quote=${data.title}`} target="_blank"><i className='fab fa-facebook' /></a></li>
                  <li><a href={`http://twitter.com/share?text=${data.title}&url=${currenthref}`}><i className='fab fa-twitter' /></a></li>
                  <li><a href={`"https://www.pinterest.com/pin/create/button/?url=${currenthref}&media=${data.image_lg}&description=${data.description}`} target="_blank"><i className='fab fa-pinterest' /></a></li>
                  <li><a href={`https://wa.me/?text=${currenthref}`} target="_blank"><i className='fab fa-whatsapp' /></a></li>
                  <li><a href={`mailto:?subject=${data.title}&amp;body=${currenthref}`} target="_blank"><i className='fas fa-envelope' /></a></li>
                </ul>
              </div>
              <div className="related-post">
              </div>

              <div className="related-post">
              </div>
            </>
              : <Spinner />
          }

        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default React.memo(SinglePostPage);
