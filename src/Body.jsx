
import './Body.css'
import './ProPicture.jsx'
import './Footer.jsx'
import { FaFacebook, FaSignInAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';


function Body() {
  return (
        <div className="section" data-aos="fade-up">

        <div className="container pt-5 mt-5 fade-down">
                <div className="row justify-content-center ">
                        <div className="col-6 text-center col-10 col-sm-8 col-md-6 col-lg-4 text-center">
                        <img src="https://www.southsudanpass.org/wp-content/uploads/bb-plugin/cache/Screen-Shot-2021-07-23-at-11.53.26-AM-circle-086ad9d2ee75d43fd4d40f0571fa2dce-60faf3a81ffa4.png" alt="Co-Founder of PASS" className="img-fluid rounded-circle d-block mx-auto propic" style={{ width: "250px", height: "250px", objectFit: "cover" }}/>
                        </div>
                </div>
        </div>
                <p className="franIntro fade-up">
                        <span>Hello,</span><br /> I'm <b>Fran Roby</b>, a co-founder of a registered 501(c)(3) nonprofit organization, <b>Padoc Area Scholars Society - PASS.</b> <br /> I served as a Guidance and College Counselor in Minnesota for 33 years, helping students navigate their paths to higher education. <br /> I continue working to expand access to college opportunities for <b>"under priviledge students of South Sudan."</b><br />Check out PASS on these social media flatforms.
                </p>

                <div className="icon-holder fade-up">
                        <a href="https://youtu.be/wwvbAVR_LMM" target="_blank" rel="noopener noreferrer"><FaYoutube className=" yt" /></a>

                        <a href="https://www.facebook.com/padocareascholarssociety/" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon fb" /></a>
                </div>
                
                <div className="btn-container fade-up">
                        <a href="https://www.southsudanpass.org/" target="_blank"><button id='visitBtn'>
                                Visit PASS <FaSignInAlt className=' forwardIcon'/>
                        </button></a>
                </div>


                <div className="footer">
                        <hr className='footer-hr'/>
                        <p className="lastWords">
                                &copy; 2025 - All rights reserved. Built by <a href="https://www.linkedin.com/in/simon-akuien-atem-710895290" target="_blank" rel="noopener noreferrer">Simon A. Atem</a>. Connect with the developer
                        </p>

                                <div className="icon-container">
                                <a href="https://web.facebook.com/profile.php?id=61572703111798" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon fb" /></a>
                                
                                <a href="https://wa.me/+251988499136
                                " target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon ws" /></a>
                                
                                <a href="https://www.linkedin.com/in/simon-akuien-atem-710895290" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon ld" /></a>

                        </div>
                </div>

        </div>
  );
}
export default Body;