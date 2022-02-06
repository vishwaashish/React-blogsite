import React from 'react';
import { NavLink } from 'react-router-dom';
import { data } from '../../Api/data';

const Hero1 = (props) => {
    const parallax = React.useRef()
    const { randomarticle1, data } = props
    const id = (!!randomarticle1 && randomarticle1?.id) ??  data?.id

    return (<>
        <div className='hero1' id="hero1" ref={parallax}
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), #00000015), url(${randomarticle1?.image_lg ?? data?.image_lg})`,
            }}>
            <div className='hero1-body'>
                <h1 className='title'>{(randomarticle1?.title) ?? data?.title}</h1>
                <div className="description" dangerouslySetInnerHTML={{ __html: (randomarticle1?.description) ?? data?.description }}></div>
                <NavLink to={"/post/" + id } ><button><i className='fa fa-hand-pointer' /></button></NavLink>
            </div>
        </div>
    </>);
};

export default React.memo(Hero1);
