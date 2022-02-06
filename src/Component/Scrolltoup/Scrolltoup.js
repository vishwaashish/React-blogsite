import React from 'react';

const Scrolltoup = () => {

    const [scroll, setScroll] = React.useState(false)
    React.useEffect(() => {
        ChangeBackground()
        window.addEventListener('scroll', ChangeBackground)
    })
    const Scollup = () => {
        window.scroll(0, 0)
    };


    const ChangeBackground = () => {
        if (window.scrollY >= 100) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    return (<>
        {scroll && <div className='scroll-box shadow' onClick={Scollup}>
            <i className='fas fa-angle-double-up' />
        </div>
        }</>
    );
};

export default Scrolltoup;
