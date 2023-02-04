import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { PrivateRoute } from "./utils/PrivateRoute";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";
import Products from "./components/Products";
import CheckoutForm from "./components/CheckoutForm";
import Resources from "./components/Resources";
import UploadProduct from "./components/UploadProduct";
function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<CheckoutForm/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/upload" element={<UploadProduct/>}/>

          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
