import React from 'react';
import Forest from '../../assets/images/nza_slideshow.jpg'
import {makeStyles} from '@material-ui/core';
import {NavBottom} from '../NavBottom'
import {NavTop} from '../NavTop'
import {Footer} from '../Footer'



interface Props{
    title: string;
}

const useStyles= makeStyles({
    body:{
        gridArea: "body",
        width: "90%",
        margin:"10px auto 0 auto",
        display: "grid",
        gridTemplateColumns: "20% 60% 20%",
        gridTemplateRows: "75% 25%",
        gridTemplateAreas:
        '"middle middle sidebar_right "\r\n    "middle middle sidebar_text"'
      },

      sidebar_right:{
        gridArea: "sidebar_right",
        backgroundColor: "hsl(14, 82%, 26%)",
        color: "white",
        overflowY: "auto",
        marginLeft:'20px',
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "small",
        height: "80%"
      },

      newsfeed: { textDecoration: "underline" },

      sidebar_text: {
        display: "block",
        gridArea: "sidebar_text",
      },

      middle: { 
        gridArea: "middle",
        paddingLeft:"0",
        "& h3":{marginLeft: "10px" },
        "& p":{marginLeft: "10px" }
        },

        responsive: { width: "100%", height: "70%", marginRight: "20px" }
    
    
         
})




export const WhoWeAre = (props:Props) => {
    const classes = useStyles();
    return (
        <div className="container">
            <NavTop></NavTop>
            <NavBottom></NavBottom>
            <div className={classes.body}>
                <div className={classes.middle}> 
                    <img className={classes.responsive} src={Forest} alt="nature_shot"/>
                    <h3>Welcome to our website</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dicta cupiditate consectetur nam esse quisquam at totam quas, voluptatibus optio, minus laborum ducimus fuga explicabo nobis! Ipsum, mollitia nam. Ipsa!</p>
                </div>
                <div className={classes.sidebar_right}>
                <h3 className={classes.newsfeed}>NEWS FEED</h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
                consequuntur tempora dolorum enim inventore qui repudiandae <br />
                adipisci debitis dignissimos deleniti itaque odit excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
                consequuntur tempora dolorum enim inventore qui repudiandae <br />
                adipisci debitis dignissimos deleniti itaque odit excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
                consequuntur tempora dolorum enim inventore qui repudiandae <br />
                adipisci debitis dignissimos deleniti itaque odit excepturi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
                consequuntur tempora dolorum enim inventore qui repudiandae <br />
                adipisci debitis dignissimos deleniti itaque odit excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
                consequuntur tempora dolorum enim inventore qui repudiandae <br />
                adipisci debitis dignissimos deleniti itaque odit excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
                consequuntur tempora dolorum enim inventore qui repudiandae <br />
                adipisci debitis dignissimos deleniti itaque odit excepturi!
                </div>
                <div className={classes.sidebar_text}>
                <h5>Bigshot, Zoo, &amp; Adds, P.C.</h5>
                <p className="address">419 West South Street, Suite 4200 <br />
                Houston, Texas 35983 <br />
                555-555-5555 (Phone) <br />
                555-555-5555 (Fax) <br />
                </p>
                </div>
            </div>
            <Footer></Footer>
    </div>    
    )
    }

    

    
