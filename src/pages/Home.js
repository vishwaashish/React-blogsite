import React from 'react';
import { useQuery } from 'react-query';
import { Callgetapi } from '../Api/CallApi';
import Footer from '../Component/Footer/Footer';
import HeroSection from '../Component/Hero/HeroSection';
import Hero2 from '../Component/Hero2/Hero2';
import Navbar from '../Component/Navbar';
import { carousalpost, randompost } from '../Component/Postcount/PostLogic';



const Home = () => {
    const { data, error, isLoading } = useQuery('post', Callgetapi,
        {
            keepPreviousData: true,
            staleTime: Infinity
        })

    const carousal = !!data && carousalpost(data, 5)

    return (
        <>
            <Navbar />
            {/* <HeroSection posts={{
                data: carousal,
                error: error,
                isLoading: isLoading,
            }} /> */}
            <Hero2 posts={{
                data: data,
                error: error,
                isLoading: isLoading,
            }} />
            <Footer />
        </>
    );
};
export default React.memo(Home)
