import moment from 'moment';
import React from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Callgetapibyid } from '../../Api/CallApi';
import { jsondata } from '../../Api/data';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';
import SocialShare from '../../Component/Social share/SocialShare';
const SinglePostPage = (prop) => {
  const navigate = useNavigate()
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
  return (<>
    <Navbar />
    <SocialShare

      shareparam={
        {
          facebook: "facebook",
          instagram: "instagram",
          youtube: "youtube",
          whatsapp: "whatsapp",
          envelope: "envelope",
        }
      }

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
                  <li><a href="#"><i className='fab fa-facebook' /></a></li>
                  <li><a href="#"><i className='fab fa-instagram' /></a></li>
                  <li><a href="#"><i className='fab fa-youtube' /></a></li>
                  <li><a href="#"><i className='fab fa-whatsapp' /></a></li>
                  <li><a href="#"><i className='fas fa-envelope' /></a></li>
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
