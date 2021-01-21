import React from "react";
import SingleUser from "./SingleUser";
import ListUsers from "./ListUsers";
import SingleResource from "./SingleResource";
import ListResources from "./ListResources";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./Dashboard.css";

const Navlinks: React.FC = () => {
  return (
    <ul className="nav-links">
      <Link to="/list-users">
        <li>List Users</li>
      </Link>
      <Link to="/myprofile">
        <li>My Profile</li>
      </Link>
      <Link to="/list-resources">
        <li>List Resource</li>
      </Link>
      <Link to="/single-resource">
        <li>Single Resource</li>
      </Link>
    </ul>
  );
};

export default Navlinks;
