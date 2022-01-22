import React from 'react';
import ContentLoader from 'react-content-loader';
import { NavLink } from 'react-router-dom';
import CardStyle1 from '../CardStyle/CardStyle1';
import CardStyle2 from '../CardStyle/CardStyle2';
import CardStyle3 from '../CardStyle/CardStyle3';
import HeroSection from '../Hero/HeroSection';
import { randompost, uniquepost } from '../Postcount/PostLogic';

const Hero2 = (props) => {
    const { data, error, isLoading } = props.posts
    const randomarticle1 = uniquepost(data)
    const randomarticle2 = randompost(data, 10)
    const randomarticle3 = randompost(data, 4)
    const randomarticle4 = randompost(data, 3)
    // console.log(randomarticle1);
    // 

    const Loader1 = () => {
        return (
            <ContentLoader
                speed={2}
                width={400}
                height={460}
                viewBox="0 0 400 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="0" y="305" rx="2" ry="2" width="500" height="8" />
                <rect x="0" y="19" rx="2" ry="2" width="500" height="248" />
                <rect x="0" y="277" rx="0" ry="0" width="500" height="20" />
                <rect x="0" y="318" rx="2" ry="2" width="500" height="8" />
                <rect x="0" y="330" rx="2" ry="2" width="500" height="8" />
            </ContentLoader>
        )

    }
    const Spinner = () => (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <svg className="spinner" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
        </div >
    )
    return (
        <>
            {
                isLoading ? <Spinner /> : <>

                    <div className="section-2">
                        <div className="section-2-0">

                            <div className="section-2-1">
                                <CardStyle1 posts={!!data && data[1]} />
                            </div>
                            <div className="section-2-2">
                                <CardStyle1 posts={!!data && data[5]} />

                            </div>
                        </div>
                        <div className="section-2-3">
                            {
                                randomarticle2 && randomarticle2.map((item, index) =>
                                    <CardStyle2 key={index} posts={item} />
                                )
                            }
                        </div>
                    </div>
                    <div className='section-3'>
                        <div className="section-3-1">
                            <h2>The Science Behind</h2>
                            <NavLink to="/blog" ><button className='outline btn-sm'>View More</button></NavLink>
                        </div>
                        <div className="section-3-2">
                            {
                                randomarticle3 && randomarticle3.map((item, index) =>
                                    <CardStyle3 posts={item} key={index} />
                                )
                            }
                        </div>
                    </div>
                    <div className='section-3'>
                        <div className="section-4-0">
                            <div className="section-4-1">
                                {
                                    randomarticle4 && randomarticle4.map((item, index) =>
                                        <CardStyle2 key={index} posts={item} />

                                    )
                                }
                            </div>
                            <div className='section-4-2'>
                                <HeroSection posts={{
                                    data: randomarticle3,
                                    error: error,
                                    isLoading: isLoading,
                                    style: { borderRadius: ".5rem" }
                                }} />
                            </div>
                        </div>
                    </div>
                </>}

        </>
    );
};

export default Hero2;
