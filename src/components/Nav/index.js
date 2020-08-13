import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
class Nav extends Component {
    state = {}
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <ul className="nav">

                <li><Link
                    className='nav-item link nav-link'
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Home</Link></li>

                <li><Link
                    className='nav-item link nav-link'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >About</Link></li>

                <li><Link
                    className='nav-item link nav-link'
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Portfolio</Link></li>

                <li><Link
                    className='nav-item link nav-link'
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Resume</Link></li>
            </ul>
        );
    }
}

export default Nav;