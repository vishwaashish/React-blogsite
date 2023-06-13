import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const CardStyle4Blog = (props) => {
  const { title, description, id, image, width } = props.posts;
  return (
    <>
      <motion.div
        key={String(title + id)}
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        }}
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
    </>
  );
};

export default React.memo(CardStyle4Blog);
