import { motion, useAnimate } from "framer-motion";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const CardStyle4Blog = (props) => {
  const [scope, animate] = useAnimate();
  const { index = 0, posts } = props;
  const { title, description, id, image, width } = posts;

  useEffect(() => {
    const startAnimation = async () => {
      await animate(
        scope.current,
        {
          y: [60, 0],
          opacity: [0, 1],
        },
        {
          delay: index / 5,
          duration: 0.1,
          type: "spring",
          damping: 12,
          stiffness: 50,
        }
      );
    };
    startAnimation();
  }, [animate, index, scope]);
  return (
    <motion.div
      key={String(title + id)}
      ref={scope}
      whileTap={{ scale: 0.9 }}
      className="card shadow-s card-hover"
      style={{ width: width }}
    >
      <NavLink to={"/post/" + id} state={props.posts}>
        <div className="imageoveray">
          <i className="fa fa-link" />
          <img src={image} className="cardstyle-img-4" alt={title} />
        </div>
      </NavLink>
      <div className="cardstyle-body-3">
        <NavLink to={"/post/" + id} state={props.posts}>
          <h4 className="card-title">{title}</h4>
        </NavLink>
        <div
          className="card-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <NavLink to={"/post/" + id} state={props.posts}>
          Read Article
        </NavLink>
      </div>
    </motion.div>
  );
};

export default React.memo(CardStyle4Blog);
