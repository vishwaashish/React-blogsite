import React from 'react';
import { NavLink } from 'react-router-dom';

const CardStyle2 = (props) => {
  const { title, description, id, width } = props.posts
  return (
    <>
      <div className="card" style={{ width: width }}>
        <div className="cardstyle-body-2">
          <NavLink to={"/post/" + id}> <h4 className="card-title">{title}</h4></NavLink>
          <div className="card-description" dangerouslySetInnerHTML={{ __html: description }}></div>
          <NavLink to={"/post/" + id} className="underline" state={props.posts}>Read Article</NavLink>
        </div>
      </div>
    </>
  );
};

export default React.memo(CardStyle2);
