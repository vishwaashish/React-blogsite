import React from "react";
import { NavLink } from "react-router-dom";
const CardStyle1 = (props) => {
  const { title = "", description, id, image, width } = props.posts;
  return (
    <>
      <div className="card" style={{ width: width }}>
        <NavLink to={"/post/" + id}>
          <img src={image} className="cardstyle-img-1" alt={title} />
        </NavLink>
        <div className="cardstyle-body-1">
          <NavLink to={"/post/" + id}>
            <h3 className="card-title">{title && title}</h3>
          </NavLink>
          <div
            className="card-description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <NavLink to={"/post/" + id}>
            <button className="outline">Read Article</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default React.memo(CardStyle1);
