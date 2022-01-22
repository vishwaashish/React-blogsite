import React from 'react';
import { useQuery } from 'react-query';
import { Callgetapi } from '../../Api/CallApi';
import CardStyle3 from '../../Component/CardStyle/CardStyle3';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';

const Blog = () => {

    const { data, error, isLoading } = useQuery('post', Callgetapi,
        {
            keepPreviousData: true,
            staleTime: Infinity
        })


    const Spinner = () => (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <svg class="spinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
        </div >
    )
    return (
        <>
            <Navbar />
            <div className="blog-post">

                {isLoading ? <Spinner /> : data && data.map((item, index) => {
                    return (
                        <div className="blog-post-single">
                            <CardStyle3 posts={item} />
                        </div>
                    )
                })}
            </div>
            <Footer />
        </>
    );
};

export default Blog;
