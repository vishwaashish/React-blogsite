import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { Callgetapi } from '../Api/CallApi';
import Footer from '../Component/Footer/Footer';
import HeroSection from '../Component/Hero/HeroSection';
import Hero2 from '../Component/Hero2/Hero2';
import Loader from '../Component/Loader/Loader';
import Navbar from '../Component/Navbar';
import { carousalpost, randompost } from '../Component/Postcount/PostLogic';
import SocialShare from '../Component/Social share/SocialShare';



const Home = () => {
    const { data, error, isLoading } = useQuery('post', Callgetapi,
        {
            keepPreviousData: true,
            staleTime: Infinity
        })
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
                <Hero2 posts={{
                    data: data,
                    error: error,
                    isLoading: isLoading,
                }} />
            </Suspense>
            <Footer />
        </>
    );
};
export default React.memo(Home)
