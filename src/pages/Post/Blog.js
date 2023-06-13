import React, { Suspense, memo } from "react";
import { useQuery } from "react-query";
import { Callgetapi } from "../../Api/CallApi";
import CardStyle4Blog from "../../Component/CardStyle/CardStyle4Blog";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import SocialShare from "../../Component/Social share/SocialShare";
import { motion } from "framer-motion";
import Loader from "../../Component/Loader/Loader";
const Spinner = memo(() => (
  <div
    style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <svg className="spinner" viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  </div>
));

const Blog = () => {
  const { data, isLoading } = useQuery(["post"], Callgetapi, {
    keepPreviousData: true,
    staleTime: Infinity,
  });

  if (isLoading) {
    return <Loader h="100dvh" />;
  }

  return (
    <>
      <Navbar />
      <SocialShare
        shareparam={{
          title: "",
          description: "",
          image_lg: "",
          image: "",
        }}
      />
      <motion.main className="blog-post">
        {data?.map((item) => {
          return <CardStyle4Blog posts={item} />;
        })}
      </motion.main>
      <Footer />
    </>
  );
};

export default React.memo(Blog);
