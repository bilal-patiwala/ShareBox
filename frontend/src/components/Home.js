import React, { useContext } from "react";
import "./Homepage.css";
import svg from "../assets/first.svg";
import svg1 from "../assets/second.svg";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
const Home = () => {
  let { logout } = useContext(AuthContext);
  return (
    <div>
      <div className="body font-AlbertSans">
        <div className="main-nav">
          <div className="logo-name">
            <a href="/s">Sharebox</a>
          </div>
          <div className="main-nav-links">
            <div className="nav-links">
              <a href="/s">About</a>
            </div>
            <div className="nav-links">
              <a className="cursor-pointer" onClick={(e) => logout()}>
                Logout
              </a>
            </div>
            <div className="nav-links">
              <a href="/s">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className="main-page-body">
        <div className="mainpage">
          <div className="main-page-text">Share/Sell your content easily!</div>
          <div className="get-started-btn">
            <button className="bookingsBtn">Get Started</button>

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          nesciunt nulla nam ex saepe expedita cum, iusto quam officiis
          perferendis soluta atque exercitationem excepturi fugit a laboriosam
          suscipit sed vel sunt nemo repellendus corrupti accusamus! Tempora
          doloremque esse deserunt laborum.
        </div>
      </div>
      <div className="detail flex flex-wrap justify-around">
        <div className="inside-detail w-1/2 flex justify-center text-detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          nesciunt nulla nam ex saepe expedita cum, iusto quam officiis
          perferendis soluta atque exercitationem excepturi fugit a laboriosam
          suscipit sed vel sunt nemo repellendus corrupti accusamus! Tempora
          doloremque esse deserunt laborum.
        </div>
        <div className="inside-detail w-1/2 flex justify-center">
          <img id="first" src={svg1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
