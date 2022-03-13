import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { Callgetapi } from '../../Api/CallApi';
import CardStyle4Blog from '../../Component/CardStyle/CardStyle4Blog';
import Footer from '../../Component/Footer/Footer';
import Loader from '../../Component/Loader/Loader';
import Navbar from '../../Component/Navbar';
import SocialShare from '../../Component/Social share/SocialShare';

const Blog = () => {

    const { data, isLoading } = useQuery('post', Callgetapi,
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
                <main className="blog-post">
                    {isLoading ? <Spinner /> : data && data.map((item, index) => {
                        return (
                            <div className="blog-post-single" key={index}>
                                <CardStyle4Blog posts={item} />
                            </div>
                        )
                    })}
                </main>
            </Suspense>
            <Footer />
        </>
    );
};

export default React.memo(Blog);
