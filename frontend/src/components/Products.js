import { useState, useEffect, useContext } from "react";
import React from "react";
import "./Products.css";
import Searchlogo from "../assets/magnifying-glass.png";
import Searchimg from "../assets/search-page-img.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const Products = () => {
  let {logout} = useContext(AuthContext);
  let navigate = useNavigate()
  let [search, setSearch] = useState("");
  let [searchedData, setSearchData] = useState([]);
  const [finalSearch, setFinalSearch] = useState("");
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchClick = (event) => {
    event.preventDefault();
    setFinalSearch(search);
  };

  useEffect(() => {
    if (finalSearch !== "") {
      getSearchedValues();
    }
  }, [finalSearch]);

  const getSearchedValues = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/getProduct/${finalSearch}`,
      {
        method: "GET",
      }
    );

    let data = await response.json();
    setSearchData(data);
    console.log(data);
  };

  const buyBtn = (event) => {
    console.log(event.target.value);
    navigate(`/checkout`,{state:{id:event.target.value}})
  }

  return (
    <div style={{ height: "100vh" }}>
      <div className="body font-AlbertSans">
        <div className="main-nav">
          <div className="logo-name">
          <Link to="/">
            <button>ShareBox</button>
            </Link>
          </div>

          <div className="navbar-search flex flwx-row">
            <input
              type="text"
              className="search-input"
              value={search}
              placeholder="Search"
              onClick={searchClick}
              onChange={searchHandler}
            />
            <button>
              <img
                className="search-logo"
                src={Searchlogo}
                alt=""
                onClick={searchClick}
              />
            </button>
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

        {searchedData.length !== 0 ? (
          <div className="mt-6 flex flex-wrap justify-evenly items-center">
            {searchedData.map((items, key) => (
              <div
                style={{
                  width: "400px",
                  height: "450px",
                  borderRadius: "14px",
                }}
                className="bg-[#dfeeee]"
                key={key}
              >
                <div
                  style={{ borderRadius: "14px", height: "280px" }}
                  className="flex justify-center"
                >
                  <img
                    style={{ padding: "12px", borderRadius: "14px" }}
                    src={`http://127.0.0.1:8000${items.image}`}
                    height="80px"
                    width="100%"
                    alt=""
                  />
                </div>

                <p className="px-4 font-AlbertSans">
                  <span className="font-bold"> Product ID : </span> {items.id}
                </p>
                <p className="px-4 font-AlbertSans">
                  <span className="font-bold"> Product Name : </span>
                  {items.product_name}
                </p>
                <hr />
                <p className="px-4 font-AlbertSans py-2">
                  <span className="font-bold"> Product Description : </span>
                  {items.product_description}
                </p>

                <div className=" mt-4 flex justify-evenly items-center">
                  <p className="">{items.price} INR</p>
                  <button value={items.id} className="buyBtn" onClick={buyBtn}>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="search-image flex justify-center">
              <img className="search-svg" src={Searchimg} alt="" />
            </div>

            <div className="flex justify-center ">
              <p className="search-svg-btm-text">
                Find the perfect fit for your taste.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
