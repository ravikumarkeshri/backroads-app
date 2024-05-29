import React from 'react'
import logo from '../Assests/logo.svg'
import { socialLinks } from '../data'
import PageLinks from '../components/PageLinks'
import SocialLink from '../components/SocialLink'


const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <PageLinks parentClass={"nav-links"} itemClass={"nav-link"} />

                    {/* <!-- left this comment on purpose --> */}
                    {/* <ul className="nav-links" id="nav-links">
                        {
                            navLinks.map((navLink) => (
                                <li key={navLink.id}>
                                    <a href={navLink.href} rel='noreferrer' className="nav-link"> {navLink.text} </a>
                                </li>
                            ))
                        } */}

                    {/* <li>
                            <a href="#home" className="nav-link"> home </a>
                        </li>

                        <li>
                            <a href="#about" className="nav-link"> about </a>
                        </li>

                        <li>
                            <a href="#services" className="nav-link"> services </a>
                        </li>

                        <li>
                            <a href="#tours" className="nav-link"> tours</a>
                        </li> */}
                    {/* </ul> */}

                    <ul className="nav-icons">
                        {
                            socialLinks.map((link) => (
                                <SocialLink key={link.id} {...link} itemClass={"nav-icon"} />
                                // <li key={link.id}>
                                //     <a href={link.href} target="_blank" rel='noreferrer' className="nav-icon"
                                //     ><i className={link.icon}></i
                                //     ></a>
                                // </li>
                            ))
                        }
                        {/* <li>
                            <a href="" target="_blank" className="nav-icon"
                            ><i className=""></i
                            ></a>
                        </li>
                        <li>
                            <a href="" target="_blank" className="nav-icon"
                            ><i className=""></i
                            ></a>
                        </li>
                        <li>
                            <a href="" target="_blank" className="nav-icon"
                            ><i className=""></i
                            ></a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )

}

export default Navbar