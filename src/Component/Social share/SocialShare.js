import React from "react";
import { IconLink } from "../AnimateClick";

const SocialShare = (props) => {
  const { title, description, image_lg } = props?.shareparam;
  const currenthref = window.location.href;

  return (
      <div className="sticky-social-share">
        <IconLink
          href={`https://www.facebook.com/sharer/sharer.php?u=${currenthref}&quote=${
            !!title ?? ""
          }`}
        >
          <i className="fab fa-facebook" />
        </IconLink>
        <IconLink
          href={`http://twitter.com/share?text=${
            title ?? ""
          }&url=${currenthref}`}
        >
          <i className="fab fa-twitter" />
        </IconLink>
        <IconLink href={currenthref}>
          <i className="fa fa-rss"></i>
        </IconLink>
        <IconLink
          href={`"https://www.pinterest.com/pin/create/button/?url=${currenthref}&media=${
            image_lg ?? ""
          }&description=${description ?? ""}`}
        >
          <i className="fab fa-pinterest" />
        </IconLink>
        <IconLink href={`https://wa.me/?text=${currenthref}`}>
          <i className="fab fa-whatsapp" />
        </IconLink>
      </div>
  );
};

export default SocialShare;
