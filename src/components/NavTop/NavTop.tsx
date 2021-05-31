import React from 'react';
import { makeStyles } from '@material-ui/core';
import placeholder from '../../assets/images/Imagefile.png'
import login from '../../assets/images/login.png'


const useStyles = makeStyles({
    NavTop: {
        gridArea: "NavTop",
        display: "flex",
        width: "90%",
        margin:'0 auto 0 auto',
        justifyContent: "space-between"
      },

      loginbutton: {
        cssFloat: "right",
        alignSelf: "end",
        height: "40px",
        borderBottomLeftRadius: "6px",
        borderBottomRightRadius: "6px"
      },

      sampleimage: {
        display: "inline-flex",
        gridArea: "header1",
        height: "75px",
        width: "300px",
        alignSelf: "flex-end"
      }
})

export const NavTop = () => {
    const classes = useStyles();
    return (
            <div className={classes.NavTop}>
                <img className={classes.sampleimage} src={placeholder}/>
                <img className={classes.loginbutton} src={login}/>
            </div>    
    )
}