// tested and changed some things
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  // for some reason adding the PF makes the images break, investigate //
  const publicFile = "http://localhost:2000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">{/* moved the social icons */}</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/compose">
              COMPOSE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {/* adding publicFile +  to the source should fix the profile pic issue, but it didn't */}
            <img
              className="topImg"
              src={publicFile + user.profilePicture}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <div className="searchBar">
          <input type="text" placeholder="Search..." className="searchInput" />
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
