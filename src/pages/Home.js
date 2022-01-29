import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { Callgetapi } from '../Api/CallApi';
import Footer from '../Component/Footer/Footer';
import HeroSection from '../Component/Hero/HeroSection';
import Hero2 from '../Component/Hero2/Hero2';
import Navbar from '../Component/Navbar';
import { carousalpost, randompost } from '../Component/Postcount/PostLogic';
import SocialShare from '../Component/Social share/SocialShare';



const Home = () => {
    const { data, error, isLoading } = useQuery('post', Callgetapi,
        {
            keepPreviousData: true,
            staleTime: Infinity
        })

    const history = useLocation()

    React.useEffect(() => {

    }, [])
    const carousal = !!data && carousalpost(data, 5)

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
