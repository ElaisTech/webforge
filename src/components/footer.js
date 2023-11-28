import React from "react";
import facebookIcon from "../img/facebook-icon-web.webp"
import instagramIcon from "../img/instagram-icon-web.webp"
import linkedInIcon from "../img/LinkedIn-R.webp"
import logo from "../img/webforge_logo.png"

function Footer(props) {
return (
    <div class="wrapper-footer-elements">
        <img src={logo} alt="webforge-logo" className="header-logo"></img>
     <div>
        <p class="hover:text-white">tel: <a href="tel:3703664224" target="_blank">3703664224</a></p>
        <p class="hover:text-white">mail:  <a href="mailto:info.webcrafters@gmail.com" target="_blank">info.webcrafters@gmail.com</a></p>
        <p> <a href="./privacy.html" class="text-black text-sm">Privacy Policy</a></p>
      </div>
      {/* <!-- contacts -->
     <!-- social shortcuts --> */}
       <div class="footer-social">
      <a href="#" id="facebookicon" target="_blank"> <img src={facebookIcon} alt="icona facebook" class="social-icon"></img> </a>
      <a href="#" id="instagramicon" target="_blank"> <img src={instagramIcon} alt="icona instagram" class="social-icon"></img></a>
      <a href="#" id="linkedinicon" target="_blank"> <img src={linkedInIcon} alt="icona linkedin" class="social-icon"></img></a>
        </div>
   {/* <!-- social shortcuts --> */}
</div>

)
}

export default Footer 