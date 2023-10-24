import React from "react";
import { useNavigate } from "react-router-dom";

const Hero1 = (props) => {
  const parallax = React.useRef();
  const navigate = useNavigate();
  const { randomarticle1, data } = props;
  const id = (!!randomarticle1 && randomarticle1?.id) ?? data?.id;

  const onPoint = (id) => () => {
    navigate("/post/" + id);
  };

  return (
    <>
      <div
        className="hero1"
        id="hero1"
        ref={parallax}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), #00000015), url(${
            randomarticle1?.image_lg ?? data?.image_lg
          })`,
        }}
      >
        <div className="hero1-body">
          <h1 className="title">{randomarticle1?.title ?? data?.title}</h1>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: randomarticle1?.description ?? data?.description,
            }}
          ></div>
          {id && (
            <button onClick={onPoint(id)} type="button" aria-label="Open">
              <i className="fa fa-hand-pointer" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(Hero1);
