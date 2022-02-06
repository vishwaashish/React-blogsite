import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { Callgetapi } from '../../Api/CallApi';
import CardStyle3 from '../../Component/CardStyle/CardStyle3';
import CardStyle4_Blog from '../../Component/CardStyle/CardStyle4_Blog';
import Footer from '../../Component/Footer/Footer';
import Loader from '../../Component/Loader/Loader';
import Navbar from '../../Component/Navbar';
import SocialShare from '../../Component/Social share/SocialShare';

const Blog = () => {

    const { data, error, isLoading } = useQuery('post', Callgetapi,
        {
            keepPreviousData: true,
            staleTime: Infinity
        })


    const Spinner = () => (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <svg className="spinner" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
        </div >
    )
    return (
        <>
            <Navbar />
            <SocialShare
                shareparam={{
                    title: "",
                    description: "",
                    image_lg: "",
                    image: ""

                }}
            />
            <Suspense fallback={<Loader h="100vh" />}>
                <div className="blog-post">
                    {isLoading ? <Spinner /> : data && data.map((item, index) => {
                        return (
                            <div className="blog-post-single" key={index}>
                                <CardStyle4_Blog posts={item} />
                            </div>
                        )
                    })}
                </div>
            </Suspense>
            <Footer />
        </>
    );
};

export default React.memo(Blog);
