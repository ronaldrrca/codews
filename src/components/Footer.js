import React from "react";
import '../style-sheets/footer.css'
import facebookIcon from '../icons/facebook_icon.svg'
import linkedinIcon from '../icons/linkedin_icon.svg'
import twitterIcon from '../icons/twitter_icon.svg'
import instagramIcon from '../icons/instagram_icon.svg'
import pinterestIcon from '../icons/pinterest_icon.svg'
import youtubeIcon from '../icons/youtube_icon.svg'

function Footer() {
    return(
        <footer>
            <div id="socialMediaIcons">
                <img src={ facebookIcon } alt='nlkdnlnkd' />
                <img src={ linkedinIcon } alt='nlkdnlnkd' />
                <img src={ twitterIcon } alt='nlkdnlnkd' />
                <img src={ instagramIcon } alt='nlkdnlnkd' />
                <img src={ pinterestIcon } alt='nlkdnlnkd' />
                <img src={ youtubeIcon } alt='nlkdnlnkd' />
            </div>
            <p id="designDevelopment">Diseño y desarrollo por Ronald Rodríguez Campillo</p>
            <p id="copyRight">2022 &copy<span> Codews</span></p>
        </footer>
    )
}

export { Footer }