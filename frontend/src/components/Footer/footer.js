import React from "react";
import facebook from "./Icons/facebook.svg";
import twitter from "./Icons/twitter.svg";
import googleplus from "./Icons/googleplus.svg";
import instagram from "./Icons/instagram.svg";
import './footer.css';


class Footer extends React.Component {

    render(){
        return(
            <div className="footer">
                <div className="leftFooter">
                  <ul>
                    <li>About Us</li>
                    <li>Press</li>
                    <li>Press</li>
                    <li>Blog</li>
                    <li>iOS</li>
                    <li>Android</li>
                  </ul>
                </div>
                <div className="rightFooter">
                    <img className="imgFooter" src={facebook} alt="facebookIcon" />
                    <img className="imgFooter" src={twitter} alt="twitterIcon" />
                    <img className="imgFooter" src={googleplus} alt="googleIcon" />
                    <img className="imgFooter" src={instagram} alt="instagramIcon" />
                </div>
            </div>
        )
    }

}

export default Footer;