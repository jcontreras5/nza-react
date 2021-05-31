import React from 'react';
import {makeStyles} from '@material-ui/core';
import {NavBottom} from '../NavBottom'
import {NavTop} from '../NavTop'
import {Footer} from '../Footer'
import Where from '../../assets/images/content-navlink-career.jpg'
import Nav from '../../assets/images/nav_side.jpg'


interface Props{
    title: string;
}

const useStyles = makeStyles({
    body: {
        gridArea: "body",
        width: "90%",
        margin: "10px auto 0 auto",
        display: "grid",
        gridTemplateColumns: "25% 60% 15%",
        gridTemplateRows: "25% 75%",
        gridTemplateAreas:
          '"sidebar paragraph paragraph "\r\n    "sidebar table1 table2"'
      },

    paragraph: { 
        gridArea: "paragraph",
        '& p': { lineHeight: 2, marginBottom: "70px" }
        },


    sidebar: {
        gridArea: "sidebar",
        backgroundImage: `url(${Nav})`,
        backgroundPosition: "center",
        height: "fit-content",
        padding: "20px 0",
        width: "90%",
        color: "white",
        '& h1': {
            borderBottom: "2px solid white",
            margin: "10px auto",
            width: "80%",
            fontWeight: "lighter"
          },
        '& ul': {
            listStyle: "none",
            width: "80%",
            margin: "auto auto",
            paddingLeft: "0",
            '& p': { fontSize: "small", margin: "0 0" },
            '& li':{ margin: "20px 0", paddingLeft: "0",
                "& img": { width: "100%" }
        }
      }},

      table1: { 
        width: "95%",
        marginTop: "10px",
        gridArea: "table1",
        '& th': {
            textAlign: "left",
            fontSize: "large",
            borderBottom: "2px solid rgb(183, 183, 183)",
            padding: "5px 0"
          },
        '& td': { 
            paddingTop: "5px",
            margin: "0 auto"},

        '& tr': { 
            padding: "5px 0 0 0",
            margin: "0 0 0 0"}
        
         },

      table2: { cssFloat: "left", marginTop: "10px", width: "100%" , gridArea: "table2",
      '& th': {
        textAlign: "left",
        fontSize: "large",
        borderBottom: "2px solid rgb(183, 183, 183)",
        padding: "5px 0"
      },
      '& td': { paddingTop: "5px" }
    },

      no_bottom_margin: { marginBottom: "10px" }
        
})

export const WhereWeWork = (props:Props) => {
    const classes = useStyles();
    return (
        <div className="container">
            <NavTop></NavTop>
            <NavBottom></NavBottom>
            <div className={classes.body}>
                <div className={classes.sidebar}>
                    <h1>Where We Work</h1>
                    <ul>
                        <li>United States</li>
                        <li>International</li>
                        <li><img src={Where}/></li>
                        <li className={classes.no_bottom_margin}>Career Opportunities</li>
                        <p> Join our magnificent firm</p>
                    </ul>                 
                </div>
                <div className={classes.paragraph}>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia neque facilis iure mollitia blanditiis nobis qui! Quae vero dignissimos labore assumenda dolorem! Quam doloribus quaerat at deserunt accusamus itaque soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At enim delectus suscipit veniam corrupti ipsum sapiente voluptatum fugiat est harum recusandae deleniti ipsa accusamus eum quod repellendus autem, molestiae modi.</p>
                </div>
                <div>
                    <table className={classes.table1}>
                            <tr><th colSpan={3}>United States </th></tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>   
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                <td>State</td>    
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>State</td>
                                
                            </tr>
                    </table>
                </div>

                    <div >
                        <table className={classes.table2}>
                            <tr >
                                <th>International</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>Canada</td>
                                </tr>
                                <tr>
                                    <td>Columbia</td>
                                </tr>
                                <tr>
                                    <td>Germany</td>
                                </tr>
                                <tr>
                                    <td>Nicaragua</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
            </div>
            <Footer></Footer>
    </div>    
    )
    }