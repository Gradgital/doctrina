import React from 'react';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div class="topnav">
        <Link to="/" className="active">Doctrina</Link>
  </div>
  );
}

export default NavBar;
