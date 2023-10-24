import React from "react";
import { NavLink } from "react-router-dom";
import CardStyle1 from "../cardStyle/CardStyle1";
import CardStyle2 from "../cardStyle/CardStyle2";
import CardStyle3 from "../cardStyle/CardStyle3";
import HeroSection from "../hero/HeroSection";
import { randompost, uniquepost } from "../postCount/postLogic";
import Hero1 from "./Hero1";
import Loader from "../loader/Loader";
const Hero2 = (props) => {
  const scroll1 = React.useRef(null);
  const { data, error, isLoading } = props.posts;
  const randomarticle1 = uniquepost(data, 1);
  const randomarticle2 = randompost(data, 10);
  const randomarticle3 = randompost(data, 4);
  const randomarticle4 = randompost(data, 3);

  return (
    <>
      {isLoading ? (
        <Loader h="100vh" />
      ) : (
        <>
          <Hero1
            randomarticle1={randomarticle1 ?? (data && data[8])}
            data={data && data[8]}
          />
          <div className="section-2" id="section2" ref={scroll1}>
            <div className="section-2-0">
              <div className="section-2-1">
                <CardStyle1 posts={!!data && data[1]} />
              </div>
              <div className="section-2-2">
                <CardStyle1 posts={!!data && data[5]} />
              </div>
            </div>
            <div className="section-2-3">
              {randomarticle2 &&
                randomarticle2.map((item, index) => (
                  <CardStyle2 key={index} posts={item} />
                ))}
            </div>
          </div>
          <div className="section-3" id="section3">
            <div className="section-3-1">
              <h2>The Science Behind</h2>
              <NavLink to="/blog">
                <button className="outline btn-sm">View More</button>
              </NavLink>
            </div>
            <div className="section-3-2">
              {randomarticle3 &&
                randomarticle3.map((item, index) => (
                  <CardStyle3 posts={item} key={index} />
                ))}
            </div>
          </div>
          <div className="section-3" id="section4">
            <div className="section-4-0">
              <div className="section-4-1">
                {randomarticle4 &&
                  randomarticle4.map((item, index) => (
                    <CardStyle2 key={index} posts={item} />
                  ))}
              </div>
              <div className="section-4-2">
                <HeroSection
                  posts={{
                    data: randomarticle3,
                    error: error,
                    isLoading: isLoading,
                    style: { borderRadius: ".5rem" },
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default React.memo(Hero2);
