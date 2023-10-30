import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Usernavbar from "./components/user/usernavbar";
import Adminnavbar from "./components/admin/adminnavbar";
import Logout from "./pages/logout";
import Button from "./components/common/button";
import Filter from "./pages/filter";
import Addusermsg from "./pages/addusermsg";
import "./App.scss";
import { AuthProvider } from "./pages/AuthContext";
import { useAuth } from "./pages/AuthContext";

import FetchDemo from "./pages/fetchDemo";
import FetchPost from "./pages/fetchPost";
import FetchUpdate from "./pages/fetchUpdate";
import FetchDelete from "./pages/fetchDelete";
import DebounceDemo from "./pages/deboundsdemo";
import FetchUserPost from "./pages/addUser";
import ProductDetails from "./pages/productsDetailPage";
import Login from "./pages/login";
import LoginAdmin from "./pages/loginAdmin";
import Authenticate from "./pages/authenticate";
import Authenticateadmin from "./pages/authenticateadmin";
import UserList from "./pages/userList";
// import Blog from "./pages/blogs";
import CartList from "./pages/showCart";
import ShowCheckout from "./pages/checkout";
import ShowTranList from "./pages/showtransaction";
import Userloggedin from "./pages/loginUser";
import UpdatePost from "./pages/updateuser";
import DeletePost from "./pages/deleteuser";
import ShowSelfInfo from "./pages/showselfinfo";
import Addbalance from "./pages/addbalance";
import ShowCartList from "./pages/showallcart";
import Rate from "./pages/rate";
import Review from "./pages/review";
import Sort from "./pages/sort";
import Adddiscount from "./pages/adddiscount";
import Addcartmsg from "./pages/addcartmsg";
import Removecartmsg from "./pages/removecartmsg";
//Updatediscount
import Updatediscount from "./pages/updatediscount.jsx";
// Showtransaction
import Showtransaction from "./pages/showtransaction.jsx";
import Balancedatamsg from "./pages/balanceDatamsg";
import Showselftransaction from "./pages/selfTran";
import Addratemsg from "./pages/addratemsg";
import PasswordReset from "./pages/passwordreset";
import Fileupload from "./pages/fileupload";
import Getfile from "./pages/showfile";
import { useDispatch } from "react-redux";
import { login } from "./redux/slices/lognslice";

import FetchUsers from "./pages/showalluser";

function App() {
  // const role = localStorage.getItem("logindata");
  const [role, setRole] = useState(localStorage.getItem("logindata"));
  const handleLogout = () => {
    localStorage.removeItem("logindata");
    localStorage.removeItem("token");
    localStorage.removeItem("responseData");
    console.log("handlelogout working");
    navigate("/");
  };
  const dispatch = useDispatch();

  useEffect(() => {
    setRole(localStorage.getItem("logindata"));
    if (role) {
      dispatch(login(role));
    }
  }, [dispatch]);
  // const role = localStorage.getItem("logindata");

  return (
    <div>
      <BrowserRouter>
        {/* <AuthProvider> */}
        {/* {role === "user" ? <Usernavbar /> : <Header />} */}
        {role === "user" ? <Usernavbar /> : null}
        {role === "admin" ? <Adminnavbar /> : null}
        {role !== "user" && role !== "admin" ? <Header /> : null}
        {/* <Header /> */}

        <Routes>
          <Route path="/search" element={<DebounceDemo />} />
          <Route path="/" element={<FetchDemo />} />
          <Route path="/sort" element={<Sort />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/createuser" element={<FetchUserPost />} />
          <Route path="/createbook" element={<FetchPost />} />
          <Route element={<Authenticateadmin />}>
            <Route path="/userlist" element={<UserList />} />

            <Route path="/updatebook/:title" element={<FetchUpdate />} />

            <Route path="/updateuser" element={<UpdatePost />} />
            <Route path="/deletebook/:title" element={<FetchDelete />} />
            <Route path="/alltheusers" element={<FetchUsers />} />
            <Route path="/deleteuser" element={<DeletePost />} />
            <Route path="adddiscount/:bookId" element={<Adddiscount />} />
            <Route path="updatediscount" element={<Updatediscount />} />
            <Route path="/showtransactionlist" element={<ShowTranList />} />

            <Route path="/useraddmsg" element={<Addusermsg />} />
          </Route>
          <Route element={<Authenticate />}>
            <Route path="/cart" element={<CartList />} />
            <Route path="/showtransaction" element={<Showselftransaction />} />
            <Route path="/showcheckout" element={<ShowCheckout />} />
            <Route path="/addcartmsg" element={<Addcartmsg />} />
            <Route path="/removecartmsg" element={<Removecartmsg />} />
            <Route path="/addbalance" element={<Addbalance />} />
            //Balancedatamsg
            <Route path="/addbalancemsg" element={<Balancedatamsg />} />
            <Route path="/showselfinfo" element={<ShowSelfInfo />} />
            <Route path="/showselfcart" element={<ShowCartList />} />
            <Route path="/addratemsg" element={<Addratemsg />} />
          </Route>
          <Route path="/forgetpassword" />
          <Route
            path="/reset-password/:token/:userId"
            element={<PasswordReset />}
          />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/rate/:bookId" element={<Rate />} />
          <Route path="/review/:bookId" element={<Review />} />
          <Route path="/userloggedin" element={<Userloggedin />} />
          <Route path="/login/user" element={<Login />} />
          <Route path="/logout/user" element={<Logout />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/logout/admin" element={<Logout />} />
          <Route path="/fileupload" element={<Fileupload />} />
          <Route path="/get/:filepath" element={<Getfile />} />
        </Routes>

        {/* </AuthProvider> */}
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
