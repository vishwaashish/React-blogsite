import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const CardStyle3 = (props) => {
  const { title, description, id, image, width } = props.posts
  // console.log(props);
  return (
    <>
      <div className="card shadow-s card-hover" style={{ width: width }}>
        <NavLink to={"/post/" + id} state={props.posts}>
          <div className="imageoveray">
            <i className="fa fa-link" />
            <img src={image} className='cardstyle-img-3' alt={title} />
          </div>
        </NavLink>

        <div className="cardstyle-body-3">
          <h4 className="card-title">{title}</h4>
          <p className="card-description">{description}</p>
          <Link
            to={"/post/" + id}
            state={props.posts}
          >Read Article</Link>
        </div>
      </div>
    </>
  );
};

export default CardStyle3;
