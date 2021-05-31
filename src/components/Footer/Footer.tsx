import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    footer: {
        gridArea: "footer",
        display: "flex",
        width: "90%",
        margin: "0 auto 0 auto",
        borderTop: "2px solid black"
      },
    center:{ 
        display: "flex",
        width: "fit-content",
        margin: ".5% auto",
        '& a':{
            textDecoration: "none",
            fontSize: "large",
            margin: "auto 35px",
            color: "black"
        },
        '& span': { 
            fontSize: "larger",
            color: "gray",
            marginTop: "2px" },
        }

})

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.center}>
                <Link to='/' > Who We Are</Link>
                <span>&#9135;</span>
                <Link to='/WhatWeDo' > What We Do</Link>
                <span>&#9135;</span>
                <Link to='#' > News and Events</Link>
                <span>&#9135;</span>
                <Link to='/WhereWeWork' > Where We Work</Link>
                <span>&#9135;</span>
                <Link to='/ContactUs' > Contact Us </Link>
            </div>
        </div>
    )
}