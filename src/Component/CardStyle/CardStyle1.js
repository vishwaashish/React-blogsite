import React from 'react';
import { NavLink } from 'react-router-dom';

const CardStyle1 = (props) => {
  const { title, description, id, image, width } = props.posts
  return (
    <>
      <div className="card" style={{ width: width }}>
        <img src={image} className='cardstyle-img-1' alt={title} />
        <div className="cardstyle-body-1">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <NavLink to={"/post/" + id} state={props.posts}><button className="outline" >Read Article</button></NavLink>
        </div>
      </div>
    </>
  );
}

export default CardStyle1;
