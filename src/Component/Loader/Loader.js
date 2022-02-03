import React from 'react';
import Loadering from "../../assets/icon/Loader.svg";

const Loader = (props) => {
    const { h } = props
    return (<div className="loader" style={{ height: !!h ? h : 300 }}>
        <img src={Loadering} />
    </div>)
}

export default React.memo(Loader);
