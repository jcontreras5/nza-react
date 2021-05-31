import React from 'react';
import {makeStyles} from '@material-ui/core';
import {NavBottom} from '../NavBottom'
import {NavTop} from '../NavTop'
import {Footer} from '../Footer'
import Subrogation from '../../assets/images/sub-02-subrogation.jpg'
import Litigation from '../../assets/images/sub-02-litigation.jpg'
import Business from '../../assets/images/sub-02-business.jpg'
import Transportation from '../../assets/images/sub-02-warehouse.jpg'
import Attorneys from '../../assets/images/sub-01-attorneys.jpg'
import { isClassDeclaration } from 'typescript';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    body: {
        gridArea: "body",
        width: "90%",
        margin: "10px auto 10px auto",
        display: "grid",
        gridTemplateColumns: "25% 75% ",
        gridTemplateRows: "20% 40% 40%",
        gridTemplateAreas:
          '"sidebarleft paragraph  "\r\n "sidebarleft image "\r\n "sidebarleft image "\r\n'
      },

    sidebar_left: {
        gridArea: "sidebarleft",
        padding: "20px",
        color: "white",
        marginBottom: "10px",
        marginRight: "10px",
        backgroundColor: "rgb(153, 23, 45)",
        justifyContent: "center",
        borderBottom: "1px black",
        fontSize: '15px',
        '& h2': { borderBottom: "3px solid white" },
      },
    
    paragraph:{
        marginLeft:"20px"
    },

    image: { 
        marginLeft:"20px",
        gridArea: "image",
        padding: "0 10px 0 0",
        width: "100%",
        borderBottom: "1px black",
        '& img':{
            width:"45%",
            height:"150px",    
        }},

    Subrogation:{
        margin:"0 10px 10px 0"
        },

    Litigation:{
        margin:"0 10px 10px 0"
        },

    Business:{
        margin:"0 10px 0 0"
        },

    Transportation:{
        margin:"0 10px 0 0"
        },

    right:{
        marginLeft:"20px",
        marginTop:"2px"
    },

    folderpen: {
        border: "2px white",
        marginLeft: "auto",
        marginRight: "auto"
      }

})
export const WhatWeDo = ( props:Props) => {
    const classes = useStyles();
    return (
        <div className="container">
            <NavTop></NavTop>
            <NavBottom></NavBottom>
            <div className={classes.body}>
                <div className={classes.sidebar_left}>
                    <h2>WHAT WE DO</h2>
                    <p className="title">Subrogation</p>
                        <p className={classes.right}>Property</p>
                        <p className={classes.right}>Worker's Comp</p>
                        <br/>

                    <p className="title">Litigation</p>
                        <p className={classes.right}>Appeliate</p>
                        <p className={classes.right}>Commercial</p>
                        <p className={classes.right}>Defense</p>
                        <p className={classes.right}>Labor/Employment</p>
                        <br/>

                    <p className="title">Business</p>
                        <p className={classes.right}>Brokerage Agreement</p>
                        <p className={classes.right}>Business Formation</p>
                        <p className={classes.right}>Contracts</p>
                        <p className={classes.right}>Property</p>
                        <p className={classes.right}>Labor/Employment</p>
                        <br/>

                    <p className="title">Transportation</p>
                        <p className={classes.right}>Brokerage Agreement</p>
                        <p className={classes.right}>Business Formation</p>
                        <br/>
                    <img className={classes.folderpen} src={Attorneys}/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>   
                <div className={classes.image}>
                    <img className={classes.Subrogation} src={Subrogation} alt="Dramatic Firefighter"/>
                    <img className={classes.Litigation} src={Litigation} alt="Business Casual"/>
                    <br/>
                    <img className={classes.Business} src={Business} alt="Aggressive Writing"/>
                    <img className={classes.Transportation} src={Transportation} alt="Autobots Rollout"/>
                </div>
                <div className={classes.paragraph}>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dolor rem iste id cupidate ipsam. Laborum 
                    ab voluptatibus praesentium error, eius nobis reprehenderit laudantium tempora voluptates dignissimos 
                    excepturi quidem odit? Quia, dolor rem iste id cupiditate ipsam. Laborum ab voluptatibus praesentium
                    error, eius nobis reprehenderit laudantium tempora voluptates dignissimos excepturi quidem odit? Quia,
                    dolor rem iste id cupidate ipsam. Laborum ab voluptatibus praesentium error, eius nobis reprehenderit
                    laundantium tempora voluptates dignissimos excepturi quidem odit. </p>
                </div>
            </div>
            <Footer></Footer>
        </div>    
    )}