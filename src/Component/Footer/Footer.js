import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const ScrollUp = () => {
        window.scrollTo(0, 0);
    }
    const currenthref = window.location.href
    return (
        <>
            <div className="footers" id="footer">
                <div className="footer-1">
                    <div className="footer-1-1">
                        <h2 className="abouttitle"><NavLink to="/" onClick={ScrollUp}>Technotaught</NavLink></h2>
                        <p className='aboutdescription'>Technotaught is a blog based dummy site just for knowledge purposes created by <a href='https://github.com/vishwaashish' target="_blank">Ashishkumar Vishwakarma</a>. If you have any questions or suggestions about a look, feel, or anything. Please let us know.</p>
                        <p>Email : <a href='mailto:vishwakarmaashish165@gmail.com'>vishwakarmaashish165@gmail.com</a></p>
                    </div>
                    <div className="footer-1-2">
                        <h4>Help</h4>

                        <ul>
                            <li><a href="mailto:vishwakarmaashish165@gmail.com" >Talk to Support </a></li>
                            <li><a href="https://github.com/vishwaashish" target="_blank" >Github account </a></li>
                            <li><a href="https://github.com/vishwaashish/React-blogsite" target="_blank">Docs</a></li>
                            <li><a href="https://technotaught.com/blogs" target="_blank">Technotaught Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-1-3">
                        <h4>Company</h4>
                        <ul>
                            <li><NavLink to="/" onClick={ScrollUp}>Home</NavLink></li>
                            <li><NavLink to="/blog" onClick={ScrollUp}>Blog</NavLink></li>
                        </ul>

                    </div>
                </div>
                <div className='footer-2'>
                    <div className='footer-2-1'>
                        <p>&#9400; 2022 <a href="https://github.com/vishwaashish" target="_blank">Ashishkumar Vishwakarma</a></p>
                    </div>
                    <div className="footer-2-2">
                        <ul>
                            <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${currenthref}`} target="_blank"><i className='fab fa-facebook' /></a></li>
                            <li><a href={`http://twitter.com/share?url=${currenthref}`}><i className='fab fa-twitter' /></a></li>
                            <li><a href={`"https://www.pinterest.com/pin/create/button/?url=${currenthref}`} target="_blank"><i className='fab fa-pinterest' /></a></li>
                            <li><a href={`https://wa.me/?text=${currenthref}`} target="_blank"><i className='fab fa-whatsapp' /></a></li>
                            <li><a href={`mailto:vishwakarmaashish165@gmail.com?subject=${currenthref}&amp;body=${currenthref}`} target="_blank"><i className='fas fa-envelope' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Footer);
