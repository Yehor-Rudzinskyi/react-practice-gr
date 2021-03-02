import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

    link: {
        textDecoration: "none",
        padding: 10,
        color: "rgb(57, 23, 88)",

        "&:hover": {
            backgroundColor: "rgb(172, 157, 157)"
        }
    },
    activeLink: {
        backgroundColor: "#2e2f90",
        color : "#fff"
    }
});

const NavLink = ({ path, label }) => {

    const classes = useStyles();
    const {pathname} = window.location

    return (
        <a className={[classes.link, pathname === path ? classes.activeLink : ''].join(' ')} href={path}>{label}</a>
    )
};


export default NavLink;
