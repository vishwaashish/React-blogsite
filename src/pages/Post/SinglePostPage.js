import moment from 'moment';
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';
const SinglePostPage = (prop) => {
  const history = useLocation()
  const navigate = useNavigate()
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (<>
    <Navbar />
    <div className="singlepage">

      <div className="singlepage-image">
      </div>
      <div className="singlepage-box shadow">
        <div className="singlepage-content">

          <i className='fa fa-arrow-alt-circle-left' onClick={() => navigate(-1)} />

          <div className='date'>{moment().format('LL')}</div>
          <h1>{history.state.title}</h1>
          <div class="break-line">
            <svg >
              <path d="M 10 10 L 300 10" />
            </svg>
          </div>
          <div className="image">
            <img src={history.state.image} />
          </div>
          <p class="description">{history.state.description}</p>
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
        </div>
      </div>
    </div>
    <Footer />
  </>

  );
};

export default SinglePostPage;
