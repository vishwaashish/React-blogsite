import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useQuery } from "react-query";
import { Callgetapi } from "../../api/callApi";
import CardStyle4Blog from "../../component/cardStyle/CardStyle4Blog";
import Loader from "../../component/loader/Loader";
import SocialShare from "../../component/socialShare";

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
      <SocialShare />
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
