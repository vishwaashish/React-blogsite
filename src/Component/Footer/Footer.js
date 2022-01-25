import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const ScrollUp = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="footers" id="footer">
                <div className="footer-1">
                    <div className="footer-1-1">
                        <h2 className="abouttitle"><NavLink to="/" onClick={ScrollUp}>Blogify</NavLink></h2>
                        <p className='aboutdescription'>In Blogify you can find a post like Linux, Windows, Android, mobile phones, games, google products, apps, etc. The main motto of this website is to spread more and more knowledge related to technology.</p>
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
                            <li><a href="/" target="_blank"><i className='fab fa-facebook' /></a></li>
                            <li><a href="/" target="_blank"><i className='fab fa-instagram' /></a></li>
                            <li><a href="/" target="_blank"><i className='fab fa-youtube' /></a></li>
                            <li><a href="/" target="_blank"><i className='fab fa-whatsapp' /></a></li>
                            <li><a href="mailto:vishwakarmaashish165@gmail.com"><i className='fas fa-envelope' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Footer);
