import { React, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <Link to="/account">
        <button className="text-white pr-4">Account</button>
      </Link>

      <button
        onClick={handleLogout}
        className="bg-red-600 px-6 py-4 rounded cursor-pointer text-white"
      >
        Logout
      </button>
    </Fragment>
  );

  const guestLinks = (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="text-white pr-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 py-4 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );

  return !user?.email ? guestLinks : authLinks;
};

export default Navbar;
