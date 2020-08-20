import  React from 'react';
import classes from './Topbar.module.css'

const Topbar = (props) => {
    return(
        <header>
            <nav className={classes.Topbar}>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt="Amazon Logo"/>
            </nav>
        </header>
    );
}

export default Topbar