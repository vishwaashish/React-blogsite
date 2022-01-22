import React from 'react';
import { NavLink } from 'react-router-dom';

const CardStyle2 = (props) => {
  const { title, description, id, image, width } = props.posts
  return (
    <>
      <div className="card" style={{ width: width }}>
        <div className="cardstyle-body-2">
          {/* <h4 className="card-title">{title?.length > 25 ? title.substring(0, 25) + '...' : title}</h4> */}
          <h4 className="card-title">{title}</h4>
          <p className="card-description">{description}</p>
          {/* <p className="card-description">{description?.length > 78 ? description.substring(0, 78) + '...' : description}</p> */}
          <NavLink to={"/post/" + id} className="underline" state={props.posts}>Read Article</NavLink>
        </div>
      </div>
    </>
  );
};

export default CardStyle2;
