import moment from 'moment';
import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Callgetapi, Callgetapibyid } from '../../Api/CallApi';
import { jsondata } from '../../Api/data';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';
import SocialShare from '../../Component/Social share/SocialShare';
import { Helmet } from "react-helmet";
import Loader from '../../Component/Loader/Loader';
import { NavLink } from 'react-router-dom';
import { randompost } from '../../Component/Postcount/PostLogic';
import CardStyle3 from '../../Component/CardStyle/CardStyle3';


const SinglePostPage = (props) => {

  const currenthref = window.location.href

  const param = useParams()
  const { data, isLoading } = useQuery(['singlepost', param.id], async () => {
    try {
      return await Callgetapibyid(param.id)
    } catch {
      throw new Error("Error")
    }
  })
  const { data: rdata, isLoading: rLoading } = useQuery('post', Callgetapi,
    {
      keepPreviousData: true,
      staleTime: Infinity
    })

  const randomarticle = randompost(rdata, 3)

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
            <meta property="og:description" content={data?.description.length ?? jsondata[9].title.length > 150 ? data?.description.substring(0, 150) ?? jsondata.description.substring(0, 150) : data?.description ?? jsondata?.description} />
            <meta property="og:site_name" content="Technotaught" />
            <meta name="twitter:image:alt" content={data?.title ?? jsondata[9].title} />

            <title>{data?.title ?? jsondata[9].title}</title>
            <meta name="description" content={data?.description.length ?? jsondata[9].title.length > 150 ? data?.description.substring(0, 150) ?? jsondata.description.substring(0, 150) : data?.description ?? jsondata?.description} />
          </Helmet>
        </>
      }
    </>
  )

  return (<>
    <Navbar />
    {data && <Seo />}
    <SocialShare
      shareparam={data ?? jsondata[9]}
    />
    <main>
      {
        data ?
          <Suspense fallback={<Loader h="100vh" />}>
            <div className='post-page' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), #00000090), url(${data?.image_lg ?? jsondata[9].image_lg})` }}>
              <div className='post-page-box '>
                <div className='breadcrumb'>
                  <NavLink to="/">Home</NavLink> / <NavLink to="/blog">Blog</NavLink> / <span className='active'>{data?.title ?? jsondata[9].title}</span>
                </div>
                <h1>{data?.title ?? jsondata[9].title}</h1>
                <div className='date'>{moment().format('LL')}</div>
                <div className="break-line">
                  <svg >
                    <path d="M 10 10 L 300 10" />
                  </svg>
                </div>
                <div className="image">
                  {<img src={data?.image_lg ?? jsondata[9].image_lg} loading="lazy" alt={data?.title ?? jsondata[9].title} />}
                </div>
                <div className='post-page-box-1'>
                  <div className='post-page-box-1-1'>
                    <div className="description" dangerouslySetInnerHTML={{ __html: data?.description ?? jsondata[9].description }}>
                    </div>
                    <div className='social-share'>
                      <h4>Share on</h4>
                      <ul>
                        <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${currenthref}&quote=${data?.title ?? jsondata[9].title}`} target="_blank"><i className='fab fa-facebook' /></a></li>
                        <li><a href={`http://twitter.com/share?text=${data?.title ?? jsondata[9].title}&url=${currenthref}`}><i className='fab fa-twitter' /></a></li>
                        <li><a href={`"https://www.pinterest.com/pin/create/button/?url=${currenthref}&media=${data?.image_lg ?? jsondata[9].image_lg}&description=${data?.description ?? jsondata[9].description}`} target="_blank"><i className='fab fa-pinterest' /></a></li>
                        <li><a href={`https://wa.me/?text=${currenthref}`} target="_blank"><i className='fab fa-whatsapp' /></a></li>
                        <li><a href={`mailto:?subject=${data?.title ?? jsondata[9].title}&amp;body=${currenthref}`} target="_blank"><i className='fas fa-envelope' /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className='post-page-box-1-2'>
                    <h3>Similar Post</h3>
                    <div className='post-page-box-1-2-1'>
                      {rLoading ? <Spinner /> : randomarticle && randomarticle.map((item, index) => {
                        return (
                          <div className="cardStyle" key={index}>
                            <CardStyle3 posts={item} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Suspense> :
          <Suspense fallback={<Loader h="100vh" />}>
            <div className='post-page' >
              <div className='post-page-box '>
                <div className='breadcrumb'>
                  <NavLink to="/">Home</NavLink> / <NavLink to="/blog">Blog</NavLink>
                  <p className='not-found'>Not Found</p>
                </div>
              </div>
            </div>
          </Suspense>
      }
    </main>
    <Footer />
  </>
  );
};

export default React.memo(SinglePostPage);
