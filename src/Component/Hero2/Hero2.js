import React from 'react';
import { NavLink } from 'react-router-dom';
import CardStyle1 from '../CardStyle/CardStyle1';
import CardStyle2 from '../CardStyle/CardStyle2';
import CardStyle3 from '../CardStyle/CardStyle3';
import HeroSection from '../Hero/HeroSection';
import { randompost, uniquepost } from '../Postcount/PostLogic';
const Hero2 = (props) => {
    const { data, error, isLoading } = props.posts
    const randomarticle1 = uniquepost(data, 1)
    const randomarticle2 = randompost(data, 10)
    const randomarticle3 = randompost(data, 4)
    const randomarticle4 = randompost(data, 3)

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
                    <div className='hero1'>
                        <div className='hero1-image'>
                            <img src={randomarticle1.image_lg} />
                        </div>
                        <div className='hero1-body'>
                            <h1 className='title'>{randomarticle1 && randomarticle1.title}</h1>
                            <div className="description" dangerouslySetInnerHTML={{ __html: randomarticle1 && randomarticle1.description }}></div>
                            <NavLink to={"/post/" + randomarticle1.id} ><button><i className='fa fa-hand-pointer' /></button></NavLink>
                        </div>
                    </div>
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
