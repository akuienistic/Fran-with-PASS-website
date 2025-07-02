
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Footer(){
        return(
                <div className="footer">
                        <hr className='footer-hr'/>
                        <p>
                                &copy; 2025 - All rights reserved. Built by <a href="https://www.linkedin.com/in/simon-akuien-atem-710895290" target="_blank" rel="noopener noreferrer">Simon A. Atem</a>. Connect with the developer
                        </p>

                                <div className="icon-container">
                                <a href="https://web.facebook.com/profile.php?id=61572703111798" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon fb" /></a>
                                
                                <a href="https://wa.me/+251988499136
                                " target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon ws" /></a>
                                
                                <a href="https://www.linkedin.com/in/simon-akuien-atem-710895290" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon ld" /></a>

                        </div>
                </div>
        );
}
export default Footer;