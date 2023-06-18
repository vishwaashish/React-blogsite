import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useQuery } from "react-query";
import { Callgetapi } from "../../Api/CallApi";
import CardStyle4Blog from "../../Component/CardStyle/CardStyle4Blog";
import Loader from "../../Component/Loader/Loader";
import SocialShare from "../../Component/Social share/SocialShare";

const Blog = () => {
  const { data, isLoading } = useQuery(["post"], Callgetapi, {
    keepPreviousData: true,
    staleTime: Infinity,
    suspense: true,
  });

  if (isLoading) {
    return <Loader h="100dvh" />;
  }

  return (
    <>
      {/* <Navbar /> */}
      <SocialShare
        shareparam={{
          title: "",
          description: "",
          image_lg: "",
          image: "",
        }}
      />
      <motion.main
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.1,
        }}
        className="blog-post"
      >
        <AnimatePresence>
          {data?.map((item, index) => {
            return (
              <CardStyle4Blog
                key={String(item.title + index)}
                posts={item}
                index={index}
              />
            );
          })}
        </AnimatePresence>
      </motion.main>
    </>
  );
};

export default React.memo(Blog);
