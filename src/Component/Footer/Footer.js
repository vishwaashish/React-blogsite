import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footers">
                <div className="footer-1">
                    <div className="footer-1-1">
                        <h2 className="abouttitle"><NavLink to="/" >Technotaught</NavLink></h2>
                        <p className='aboutdescription'>Technotaught is a technology-related blog. Here you can find a post like Linux, Windows, Android, mobile phones, games, google products, apps, etc. The main motto of this website is to spread more and more knowledge related to technology.</p>
                    </div>
                    <div className="footer-1-2">
                        <h4>Help</h4>

                        <ul>
                            <li><a href="" className="underline">Talk to Support </a></li>
                            <li><a href="">Support Docs</a></li>
                            <li><a href="">Api Docs</a></li>
                            <li><a href="">System Status</a></li>

                        </ul>
                    </div>
                    <div className="footer-1-3">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Join Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>

                    </div>
                </div>
                <div className='footer-2'>
                    <div className='footer-2-1'>
                        <p>&#9400; 2022 <a href="#">Technotaught</a></p>
                    </div>
                    <div className="footer-2-2">
                        <ul>
                            <li><a href="#"><i className='fab fa-facebook' /></a></li>
                            <li><a href="#"><i className='fab fa-instagram' /></a></li>
                            <li><a href="#"><i className='fab fa-youtube' /></a></li>
                            <li><a href="#"><i className='fab fa-whatsapp' /></a></li>
                            <li><a href="#"><i className='fas fa-envelope' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
