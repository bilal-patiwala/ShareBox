import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import "./resource.css";
import { Link } from "react-router-dom";
function Resources() {
  let { logout, authToken, user } = useContext(AuthContext);
  let [resources, setResources] = useState([]);
  let fileDownload = require('js-file-download');
  useEffect(() => {
    getResources();
  }, []);

  const getResources = async () => {
    let response = await fetch("http://127.0.0.1:8000/getResource/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken.refresh}`,
      },
    });
    let data = await response.json();
    setResources(data);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="body">
        <div className="font-AlbertSans">
          <div className="main-nav">
            <div className="logo-name">
              <Link to="/">
                <button>ShareBox</button>
              </Link>
            </div>
            <div className="main-nav-links">
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
        <div className="main-body">
          <p style={{ fontSize: "25px" }} className="user-text">
            Hello <span>{user.username}</span>
          </p>
          <p
            style={{ fontSize: "20px", marginBottom: "20px" }}
            className="user-text"
          >
            {" "}
            Confirmed Orders
          </p>

          <div className="flex flex-wrap justify-around">
            {resources.length !== 0 ? (
              resources.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "300px",
                    height: "420px",
                    borderRadius: "14px",
                    margin: "0px 0px 50px 20px",
                  }}
                  className="bg-[#dfeeee]"
                >
                  <div
                    style={{ borderRadius: "14px", height: "280px" }}
                    className="flex justify-center"
                  >
                    <img
                      style={{ padding: "12px", borderRadius: "14px" }}
                      src={`http://127.0.0.1:8000${item.image}`}
                      height="80px"
                      width="200px"
                      alt=""
                    />
                  </div>

                  <p className="px-2 font-AlbertSans">
                    <span className="font-bold"> Product ID:</span> {item.id}
                  </p>
                  <p className="px-2 font-AlbertSans">
                    <span className="font-bold"> Product Name:</span>
                    {item.product_name}
                  </p>
                  <p className="px-2 font-AlbertSans">
                    <span className="font-bold"> Seller Name:</span>
                    {item.seller}
                  </p>

                  <div className="mt-2 flex justify-around">
                    <a className="mt-2" onClick={(e) => {fileDownload(`http://127.0.0.1:8000/${item.product}`)}}>Download Pdf</a>
                  </div>
                </div>
              ))
            ) : (
              <div>Nothing to see here</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
