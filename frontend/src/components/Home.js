import React, { useContext } from "react";
import "./Homepage.css";
import "./Footer.css";
import svg from "../assets/first.svg";
import svg1 from "../assets/second.svg";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InstaLogo from "../assets/instagram.png";
import LinkedinLogo from "../assets/linkedin.png";
import FacebookLogo from "../assets/facebook.png";


const Home = () => {
  let { logout } = useContext(AuthContext);
  const handleClickScroll = () => {
    const element = document.getElementById('key-features');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className="body font-AlbertSans">
        <div className="main-nav">
          <div className="pl-6 pt-4 logo-name">
            <Link to="/">
            <button>ShareBox</button>
            </Link>
          </div>
          <div className="main-nav-links pr-6 pt-4">
            
            <div className="nav-links">
              <Link to="/">
              <button>Home</button>
              </Link>
            </div>
           
            <div className="nav-links">
              <Link to="/resources">
              <button>Resources</button>
              </Link>
            </div>
            <div className="nav-links">
              <a className="cursor-pointer" onClick={(e) => logout()}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main-page-body">
        <div className="mainpage">
          <div className="main-page-text">
            Selling your E-Content was never this easy !!
          </div>
          <div className="get-started-btn">
            <button onClick={handleClickScroll} className="bookingsBtn">Get Started</button>

            <Link to="/products">
              <button className="bookingsBtn-login">Buy Products</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="detail flex flex-wrap justify-around">
        <div className="inside-detail w-1/2 flex justify-center">
          <img id="first" src={svg} alt="" />
        </div>
        <div className="inside-detail w-1/2 flex justify-center text-detail">
          Have you ever stopped creating content just cause you didn't get the
          right outcome for your effort. Well not to worry now, with ShareBox
          you can find crowd that actually believes in supporting small scale
          content creators and also appreciate good and valuable content....
        </div>
      </div>
      <div className="detail flex flex-wrap justify-around">
        <div className="inside-detail w-1/2 flex justify-center text-detail">
          Are you someone who likes content that is not made for large crowd?
          Maybe you like stuff that is relatable to you and also makes you feel
          that the content is specially altered for you? Here, on ShareBox you
          can find content creators who make stuff that helps to connect you
          with YOU!!!
        </div>
        <div className="inside-detail w-1/2 flex justify-center">
          <img id="first" src={svg1} alt="" />
        </div>
      </div>

      <div id="key-features" className="get-started pb-4">
        <div className="text-center text-black font-bold text-4xl font-AlbertSans mb-6">
          Key Features
        </div>
        <motion.div
          initial={{ opacity: 0, translateX: -70 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.3 }}
          className="one-div"
        >
          <p>
            <b>Supportive Enviroment</b>
            <br />
            <i>
              A very friendly and supportive community of content writers and
              buyers.
            </i>{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 70 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.5 }}
          className="two-div"
        >
          <p style={{ marginTop: "14px" }}>
            <b>Easy Payments</b>
            <br />
            <i>
              Your hardwork and creativity will pay off here, don't worry!!
            </i>{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -70 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.7 }}
          className="three-div"
        >
          <p>
            <b>Minimal Commision</b>
            <br />
            <i>
              We only take a little amount,as we know what its like to aim for
              stars while still on ground!
            </i>{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 70 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.9 }}
          className="four-div"
        >
          <p>
            <b>Few Clicks</b>
            <br />
            <i>
              Everything with just a few clicks, we save both time and money.
            </i>{" "}
          </p>
        </motion.div>
      </div>

      <div className="flex flex-row justify-around">
        <div className="footer w-1/3 flex flex-col justify-center footer-left">
          ShareBox
          <div className="flex flex-row footer-middle">
            <div>
              <img src={InstaLogo} alt="instagram" className="footer-logo" />
            </div>
            <div>
              <img src={FacebookLogo} alt="instagram" className="footer-logo" />
            </div>
            <div>
              <img src={LinkedinLogo} alt="instagram" className="footer-logo" />
            </div>
          </div>
        </div>
        <div className="footer w-1/3 flex justify-center">
          <div className="flex flex-col">
            <div className="footer-middle">
              <p className="newsletter-text">NewsLetter</p>
            </div>
            <div className="footer-middle">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="email"
              />
            </div>

            <div className="footer-middle">
              <button className="email-btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer w-1/3 flex justify-center">
          <div className="flex flex-col">
            <p className="footer-right text-lg font-bold">Contact Us</p>
            <p className="footer-right">+852741852</p>
            <p className="footer-right">
              pip npm squad,Hack-this-fall, Karnavati University, Gandhinagar -
              500080
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
