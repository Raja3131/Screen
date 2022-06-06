import React from "react";
import "./styles.css";

const Navbar = ({
  children,
  h5,


}) => {
  return (
    <>
      <div className="navbar">
        <ul className="ulList">
          <li className="list">
            <h5>{h5}</h5>
          </li>
          <li>
            <button>RP</button>
          </li>
          <li>
            <button>PCP</button>
          </li>
          <li>
            <select>
              <option>Sort by</option>
            </select>
          </li>
          <li>
            <button>CM</button>
          </li>
        </ul>
      </div>

      
    </>
  );
};

export default Navbar;
