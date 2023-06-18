import React from "react";
import { useQuery } from "react-query";
import { Callgetapi } from "../Api/CallApi";
import Hero2 from "../Component/Hero2/Hero2";
import SocialShare from "../Component/Social share/SocialShare";

const Home = () => {
  const { data, error, isLoading } = useQuery("post", Callgetapi, {
    keepPreviousData: true,
    staleTime: Infinity,
  });
  return (
    <>
      <SocialShare
        shareparam={{
          title: "",
          description: "",
          image_lg: "",
          image: "",
        }}
      />
      <Hero2
        posts={{
          data: data,
          error: error,
          isLoading: isLoading,
        }}
      />
    </>
  );
};
export default React.memo(Home);
