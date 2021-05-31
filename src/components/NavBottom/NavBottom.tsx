import React from 'react';
import { makeStyles } from '@material-ui/core';
import classes from '*.module.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    NavBottom:{
    gridArea: "NavBottom",
    display: "flex",
    width: "90%",
    margin: "auto auto",
    padding: "15px 0",

    borderTop: "3px solid black",
    borderBottom: "3px solid black",
    '& span': { fontSize: "15px" },
    '& a': {
        margin: "auto auto",
        fontSize: "large",
        color: "black",
        fontFamily: "Arial, Helvetica, sans-serif",
        textDecoration: "none"}}
})

export const NavBottom = () => {
    const classes = useStyles();
    return (
            <div className={classes.NavBottom}>
                <Link to='/' > Who We Are</Link>
                <span>｜</span>
                <Link to='/WhatWeDo' > What We Do</Link>
                <span>｜</span>
                <Link to='#' > News and Events</Link>
                <span>｜</span>
                <Link to='/WhereWeWork' > Where We Work</Link>
                <span>｜</span>    
                <Link to='/ContactUs' > Contact Us </Link>
            </div>      
          
    )
}