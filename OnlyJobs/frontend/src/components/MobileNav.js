import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import HomeIcon from '@material-ui/icons/Home'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import InfoIcon from '@material-ui/icons/Info'
import EmailIcon from '@material-ui/icons/Email'
import '../componentStyles/mobileNav.css'
import { Typography } from '@material-ui/core'

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Login / Signup',
        path: '/login',
        icon: <MeetingRoomIcon />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <InfoIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        icon: <EmailIcon />,
        cName: 'nav-text'
    },
]

const MobileNav = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <MenuIcon fontSize="large" color="secondary" onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="left"
                        noWrap
                    >
                        Only Jobs
                    </Typography>
                        <Link to="#" className="menu-bars">
                            <CloseIcon fontSize='large' color="secondary" onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        </>
    )
}

export default MobileNav
