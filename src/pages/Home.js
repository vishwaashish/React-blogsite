import React from "react";
import { useQuery } from "react-query";
import { Callgetapi } from "../api/callApi";
import Hero2 from "../component/hero2/Hero2";
import SocialShare from "../component/socialShare";

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
