import React, { Suspense } from "react";
import { useQuery } from "react-query";
import { Callgetapi } from "../Api/CallApi";
import Footer from "../Component/Footer/Footer";
import Hero2 from "../Component/Hero2/Hero2";
import HomeNavbar from "../Component/HomeNavbar";
import Loader from "../Component/Loader/Loader";
import SocialShare from "../Component/Social share/SocialShare";

const Home = () => {
  const { data, error, isLoading } = useQuery("post", Callgetapi, {
    keepPreviousData: true,
    staleTime: Infinity,
  });
  return (
    <>
      <HomeNavbar />
      <SocialShare
        shareparam={{
          title: "",
          description: "",
          image_lg: "",
          image: "",
        }}
      />
      <Suspense fallback={<Loader h="100vh" />}>
        <Hero2
          posts={{
            data: data,
            error: error,
            isLoading: isLoading,
          }}
        />
      </Suspense>
      <Footer />
    </>
  );
};
export default React.memo(Home);
