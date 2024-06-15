import { NavLink } from "react-router-dom";
import "../header/Header.css";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth"; 

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "retro"; 
};

function Header() {
  const { changeTotal, user } = useGlobalContext();
  const { displayName, photoURL, email } = user;

  const [theme, setTheme] = useState(themeFromLocalStorage()); 
  const handleTheme = () => {
    const newTheme = theme === "retro" ? "dracula" : "retro";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const logOut = () => {
    if (window.confirm("Are you sure?")) {
      signOut(auth)
        .then(() => {
          alert("Successfully logged out.");
        })
        .catch((error) => {
          alert("Error logging out. Please try again.");
        });
    }
  };

  return (
    <header className="bg-base-200 text-base-content rounded mb-10 ">
      <nav className="flex justify-between items-center">
        <div className="left">
          <NavLink to="/">
            <p className="text-blue-600 text-xl ">LOGO</p>
          </NavLink>
        </div>
        <div className="center flex gap-10">
          <ul className="flex gap-10 list-none">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">{changeTotal}</span>
            <button className="btn uppercase -mt-2 text-xl hover:text-blue-500">
              {" "}
              Add To Cart
            </button> 
          </div>
          <div></div>
        </div>
        <div className="right">
          <label className="swap swap-rotate">
            <input
              onClick={handleTheme}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              checked={theme === "dracula"}
              readOnly
            />
            
          </label>
          <button onClick={logOut} className="btn btn-primary">Log Out</button> 
        </div>
      </nav>

    </header>
  );
}

export default Header;
