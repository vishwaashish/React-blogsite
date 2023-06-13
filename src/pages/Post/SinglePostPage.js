import moment from "moment";
import React, { Suspense, useRef } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Callgetapi, Callgetapibyid } from "../../Api/CallApi";
import { jsondata } from "../../Api/data";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import SocialShare from "../../Component/Social share/SocialShare";
import { Helmet } from "react-helmet";
import Loader from "../../Component/Loader/Loader";
import { NavLink } from "react-router-dom";
import { randompost } from "../../Component/Postcount/PostLogic";
import CardStyle3 from "../../Component/CardStyle/CardStyle3";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
  close: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};
const variants1 = {
  open: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 10,
      // type: "spring",
      // damping: 10,
      // mass: 0.75,
      // stiffness: 100,
    },
  },
  close: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      // type: "spring",
      // damping: 10,
      // mass: 0.75,
      // stiffness: 100,
    },
  },
};

const SinglePostPage = (props) => {
  const currenthref = window.location.href;
  const param = useParams();
  const { data, isLoading } = useQuery(["singlepost", param.id], async () => {
    try {
      return await Callgetapibyid(param.id);
    } catch {
      throw new Error("Error");
    }
  });
  const { data: rdata, isLoading: rLoading } = useQuery("post", Callgetapi, {
    keepPreviousData: true,
    staleTime: Infinity,
  });

  const { image_lg, title, description } = data || jsondata[9];

  const randomarticle = randompost(rdata, 3);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [param]);

  const Spinner = () => (
    <div
      style={{
        display: "flex",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
  const Seo = () => (
    <>
      {!isLoading && (
        <>
          <Helmet>
            <meta property="og:title" content={title} />
            <meta property="og:type" content={title} />
            <meta property="og:image" content={title} />
            <meta property="og:url" content={currenthref} />
            <meta name="twitter:card" content={image_lg} />
            <meta
              property="og:description"
              content={
                data?.description.length ?? jsondata[9].title.length > 150
                  ? data?.description.substring(0, 150) ??
                    jsondata.description.substring(0, 150)
                  : data?.description ?? jsondata?.description
              }
            />
            <meta property="og:site_name" content="Technotaught" />
            <meta name="twitter:image:alt" content={title} />

            <title>{title}</title>
            <meta
              name="description"
              content={
                data?.description.length ?? jsondata[9].title.length > 150
                  ? data?.description.substring(0, 150) ??
                    jsondata.description.substring(0, 150)
                  : data?.description ?? jsondata?.description
              }
            />
          </Helmet>
        </>
      )}
    </>
  );

  return (
    <>
      <Navbar />
      <SocialShare shareparam={data ?? jsondata[9]} />

      {isLoading && <Loader h="100vh" />}

      <Suspense fallback={<Loader h="100vh" />}>
        <motion.main
          className="post-page"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), #00000090),${
              data && `url(${image_lg})`
            }`,
          }}
        >
          <motion.div
            className="post-page-box "
            variants={variants}
            initial="open"
            animate="close"
          >
            <motion.div
              className="breadcrumb"
              variants={variants1}
              initial="open"
              animate="close"
            >
              <NavLink to="/">Home</NavLink> /{" "}
              <NavLink to="/blog">Blog</NavLink> /{" "}
              <span className="active">{title}</span>
            </motion.div>
            {data && (
              <motion.div variants={variants1} initial="open" animate="close">
                <Seo />
                <h1>{title}</h1>
                <div className="date">{moment().format("LL")}</div>
                <div className="break-line">
                  <svg>
                    <path d="M 10 10 L 300 10" />
                  </svg>
                </div>
                <motion.div className="image">
                  <img src={image_lg} loading="lazy" alt={title} />
                </motion.div>
                <div className="post-page-box-1">
                  <div className="post-page-box-1-1">
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    ></div>
                    <div className="social-share">
                      <h4>Share on</h4>
                      <ul>
                        <li>
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${currenthref}&quote=${title}`}
                          >
                            <i className="fab fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`http://twitter.com/share?text=${title}&url=${currenthref}`}
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`"https://www.pinterest.com/pin/create/button/?url=${currenthref}&media=${image_lg}&description=${description}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://wa.me/?text=${currenthref}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`mailto:?subject=${title}&amp;body=${currenthref}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fas fa-envelope" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-page-box-1-2">
                    <h3>Similar Post</h3>
                    <div className="post-page-box-1-2-1">
                      {rLoading ? (
                        <Spinner />
                      ) : (
                        randomarticle &&
                        randomarticle.map((item, index) => {
                          return (
                            <div className="cardStyle" key={index}>
                              <CardStyle3 posts={item} />
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {!data && !isLoading && (
              <>
                <p className="not-found">Not Found</p>
              </>
            )}
          </motion.div>
        </motion.main>
      </Suspense>

      <Footer />
    </>
  );
};

export default React.memo(SinglePostPage);
