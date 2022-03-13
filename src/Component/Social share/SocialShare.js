import React from 'react';

const SocialShare = (props) => {
    const { title, description, image_lg } = props?.shareparam
    // const [toogle, setoTggle] = React.useState(false)
    const currenthref = window.location.href
    // const Toggle = () => {
    //     setoTggle(toogle => !toogle)
    // }
    return (<div>
        {/* <div className={toogle ? "fixed-social-share open-social-share" : "fixed-social-share"}>
            <div className='icon'>
                <div className="fl-fl">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${currenthref}&quote=${!!title ?? ""}`} target="_blank"><i className='fab fa-facebook' /></a>
                </div>
                <div className="fl-fl">
                    <a href={`http://twitter.com/share?text=${title ?? ""}&url=${currenthref}`}><i className='fab fa-twitter' /></a>
                </div>
                <div className="fl-fl">
                    <a href={currenthref} target="_blank"> <i className="fa fa-rss"></i></a>
                </div>
                <div className="fl-fl">
                    <a href={`"https://www.pinterest.com/pin/create/button/?url=${currenthref}&media=${image_lg ?? ""}&description=${description ?? ""}`} target="_blank"><i className='fab fa-pinterest' /></a>
                </div>
                <div className="fl-fl">
                    <a href={`https://wa.me/?text=${currenthref}`} target="_blank"><i className='fab fa-whatsapp' /></a>
                </div>
            </div>
            <div className='toggle-icon' onClick={Toggle}>
                <i className={toogle ? "fas fa-angle-double-right rotate-left" : "fas fa-angle-double-right rotate-right"} />
            </div>

        </div> */}
        <div className='sticky-social-share'>
            <div className='icon'>
                <div className="fl-fl">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${currenthref}&quote=${!!title ?? ""}`} target="_blank"><i className='fab fa-facebook' /></a>
                </div>
                <div className="fl-fl">
                    <a href={`http://twitter.com/share?text=${title ?? ""}&url=${currenthref}`}><i className='fab fa-twitter' /></a>
                </div>
                <div className="fl-fl">
                    <a href={currenthref} target="_blank"> <i className="fa fa-rss"></i></a>
                </div>
                <div className="fl-fl">
                    <a href={`"https://www.pinterest.com/pin/create/button/?url=${currenthref}&media=${image_lg ?? ""}&description=${description ?? ""}`} target="_blank"><i className='fab fa-pinterest' /></a>
                </div>
                <div className="fl-fl">
                    <a href={`https://wa.me/?text=${currenthref}`} target="_blank"><i className='fab fa-whatsapp' /></a>
                </div>
            </div>
        </div>
    </div>);
};

export default SocialShare;
