import './AboutPass.css';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import Mission from './assets/mission.svg';
import Vision from './assets/vision.svg';

function AboutPass() {
  return (
    <div className="about-container">
      <div className="wrapper-container">
        {/* Intro */}
        <div className="intro-container text-center mb-5" data-aos="fade-up">
          <h1
            className="h1-one mb-3 text-wrap fs-1 fs-md-3 fs-lg-4"
            data-aos="fade-up"
          >
            PASS' Cores In a Nut Shell
          </h1>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQF49YQxxCzzJQ/feedshare-shrink_800/B4DZczjR58HAAg-/0/1748916577392?e=1754524800&v=beta&t=UK5ms-PXDnVYGGQYzywRrcf_SmuTwgFwzYAUmkYpJDE"
            alt="PASS-Logo"
            className="passLogo mb-5 img-fluid rounded-circle d-block mx-auto mb-3"
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover',
              margin: '2rem',
            }}
          />
          <hr className="foota-hr" />
          <p data-aos="fade-up">
            PASS was founded in 2021 by{' '}
            <a
              className="augustino"
              href="https://www.suddinstitute.org/who-we-are/team/member/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Augustino Mayai
            </a>
            , a former Lost Boy of Sudan, and I, a former Guidance and Cousellor
            from Minnesota in the U.S. Moved by South Sudan’s poverty and lack
            of college opportunities for the youth, we created PASS to fight
            poverty through education, offering full-ride college scholarships
            to students who’d otherwise never attend university.
          </p>
        </div>

        {/* Mission */}
        <div
          className="mission-holder row align-items-center mb-5"
          data-aos="fade-up"
        >
          <div className="col-lg-6 mb-3 mb-lg-0">
            <h1>OUR MISSION</h1>
            <p>
              PASS empowers South Sudanese youth, especially young women, to
              overcome extreme poverty by providing access to education,
              resources, and life-changing opportunities. We aim to create
              pathways to a brighter, more equitable future.
            </p>
            <a
              href="https://www.southsudanpass.org/team/who-we-are/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary mb-5">Read more</button>
            </a>
          </div>
          <div className="col-lg-6 text-center">
            <img src={Mission} alt="Mission of PASS" className="img-fluid" />
          </div>
        </div>

        {/* Vision */}
        <div
          className="vision-holder row align-items-center flex-sm-row-reverse"
          data-aos="fade-up"
        >
          <div className="col-lg-6 text-center order-2 order-lg-1">
            <img src={Vision} alt="Vision of PASS" className="img-fluid" />
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <h1>OUR VISION</h1>
            <p>
              PASS envisions a future where all South Sudanese youth regardless
              of gender or background, have the education, access, and
              opportunity they need to rise above poverty, unlock their
              potential, and lead change in their communities.
            </p>
            <a
              href="https://www.southsudanpass.org/team/who-we-are/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary mb-5">Read more</button>
            </a>
          </div>
        </div>
      </div>

      <div className="foota" data-aos="fade-up">
        <hr className="foota-hr" />
        <p>
          &copy; 2025 - All rights reserved. Built by{' '}
          <a
            href="https://www.linkedin.com/in/simon-akuien-atem-710895290"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simon A. Atem
          </a>
          . Connect with the developer
        </p>

        <div className="icon-wrapper">
          <a
            href="https://web.facebook.com/profile.php?id=61572703111798"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icons faceBook" />
          </a>

          <a
            href="https://wa.me/+251988499136
                                "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icons whatsApp" />
          </a>

          <a
            href="https://www.linkedin.com/in/simon-akuien-atem-710895290"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icons linkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default AboutPass;
