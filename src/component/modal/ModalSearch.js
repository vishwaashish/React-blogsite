import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { AnimateIcon } from "../animateClick";
import { Callgetapi } from "../../common/services";
const ModalSearch = (props) => {
  const { toggle } = props;
  const { data } = useQuery("post", Callgetapi);
  const inputref = useRef(null);
  const [values, setValues] = React.useState("");
  const [apidata, setApiData] = React.useState([]);

  const ToggleClose = () => {
    toggle((isOpen) => !isOpen);
  };

  React.useEffect(() => {
    inputref.current.focus();
  }, []);

  const Handlevalue = (e) => {
    const { value } = e.target;
    const searchvalue = value.toLowerCase();
    if (value.length > 1) {
      setValues(searchvalue);
      const filter = data.filter((val) =>
        val.title.toLowerCase().match(searchvalue)
      );
      setApiData(filter);
    } else if (value.length === 0) {
      setApiData([]);
    }
  };
  const Result = () => {
    const escapeRegExp = (str = "") =>
      str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    if (apidata.length !== 0) {
      const patt = new RegExp(`(${escapeRegExp(values)})`, "i");
      return (
        <div className="search-div-result">
          {apidata.map((item, index) => {
            const parts = String(item.title).split(patt);
            return (
              <NavLink
                to={"/post/" + item.id}
                key={index + item.id}
                onClick={ToggleClose}
              >
                <motion.div
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index / 5,
                    duration: 0.1,
                    type: "spring",
                    damping: 12,
                    stiffness: 50,
                  }}
                  className="search-result"
                >
                  <i className="fa fa-file-alt" />
                  <p>
                    {parts.map((part, index) =>
                      patt.test(part) ? <mark key={index}>{part}</mark> : part
                    )}
                  </p>
                </motion.div>
              </NavLink>
            );
          })}
        </div>
      );
    } else if (values.length === 0) {
      return <div className="error">No recent searches</div>;
    } else {
      return <div className="error">Not Found</div>;
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 500,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 500,
      }}
      transition={{
        duration: 0.8,
        type: "spring",
        damping: 15,
      }}
      className="modal-search"
      onClick={ToggleClose}
    >
      <div
        className="modal-search-dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="icon">
          <AnimateIcon className="fa fa-times close" onClick={ToggleClose} />
        </div>
        <div className="modal-search-content">
          <div className="modal-search-header">
            <div className="input-group">
              <i className="fa fa-search" />
              <input
                type="search"
                ref={inputref}
                name="search"
                placeholder="Search..."
                onChange={Handlevalue}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="modal-search-body">
            <Result />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(ModalSearch);
