import React, { useContext, useState } from "react";
import "./Upload.css";
import { Form, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
function UploadProduct() {
  let { logout, authToken } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [description, setDesciption] = useState("");
    const [price, setPrice] = useState("");
    // const [coverpic, setCoverImage] = useState();
    const [file, setFile] = useState([])
    let formData = new FormData()
    formData.append('coverpic', file[0])
    formData.append('fileP',file[1])
    const handleUpload = async (event) => {
        event.preventDefault();
        event.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/shareResource/',{
            method:'POST',
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization': `Bearer ${authToken.refresh}`,
                
            },
            body:JSON.stringify({product_name:title, product_description:description,price:price, image:formData[0], product:formData[1]})
        })
        let data = await response.json()
        console.log(data);
    }

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
          <div className="text-center text-2xl text-dark mt-4">
            Upload the information of product you want to sell
          </div>
          <div className="inputBox flex justify-center">
            <form onSubmit={handleUpload} encType="multipart/form-data">
              <input
                className="bg-slate-200"
                type="text"
                value={title}
                name="productName"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project Title"
                required
              />
              <br />
              <input
                className="bg-slate-200"
                type="text"
                value={price}
                name="productPrice"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Project Price"
                required
              />
              <br />
              <input
                className="bg-slate-200"
                type="text"
                value={description}
                name="productDescription"
                onChange={(e) => setDesciption(e.target.value)}
                placeholder="Project Description (optional)"
              />
              <br />
              <br />
              <label className="font-bold font-AlbertSans pl-2">
                Cover Image of the file <span className="text-red-300">*</span>
              </label>
              <br />
              <input className="bg-slate-200" type="file" value={file[0]} onChange={(e) => setFile(e.target.files[0])} name="productImage" />
              <br />
              <br />

              <label className="font-bold font-AlbertSans pl-2">
                Upload your file <span className="text-red-300">*</span>
              </label>
              <br />
              <input className="bg-slate-200" type="file" value={file[1]} onChange={(e) => setFile(e.target.files[0])} name="product" />
              <br/>
              <div className="flex justify-center">
              <button type="submit" className="m-4 mt-6 uploadBtn">Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadProduct;
