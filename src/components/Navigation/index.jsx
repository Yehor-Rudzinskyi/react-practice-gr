import React from 'react';
import NavLink from './NavLink'
import {createUseStyles} from 'react-jss'
// import './style.css';

const useStyles = createUseStyles({
    navigation: {
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #000",
        listStyle: "none",
        margin: (x) => x > 5 ? 0 : 10,
        padding: 10,
        minWidth: 200,
    }
});

const Navigation = () => {
    const x = 7;
 
    const classes = useStyles(x);

    return (
        <div className={classes.navigation}>
            <NavLink path='/' label='Home' />
            <NavLink path='/users-page' label='Users' />
            <NavLink path='/works' label='Home Works' />
            <NavLink path='/books' label='Books' />
            <NavLink path='/about' label='About' />
            <NavLink path='/test' label='Test' />
             <NavLink path='/user-detail' label='User Detail' />

            {/* <a className={[classes.link, pathname === '/' ? classes.activeLink : ''].join(' ')} href='/'>Home</a> */}
            {/* <a className={[classes.link, pathname === '/users-page' ? classes.activeLink : ''].join(' ')} href='/users-page'>Users</a> */}
            {/* <a className={[classes.link, pathname === '/works' ? classes.activeLink : ''].join(' ')} href='/works'>Home Works</a> */}
            {/* <a className={[classes.link, pathname === '/books' ? classes.activeLink : ''].join(' ')} href='/books'>Books</a> */}
            {/* <a className={[classes.link, pathname === '/about' ? classes.activeLink : ''].join(' ')} href='/about'>About</a> */}
            {/* <a className={[classes.link, pathname === '/test' ? classes.activeLink : ''].join(' ')} href='/test'>Test</a> */}
        

        </div>
    );
};

export default Navigation;