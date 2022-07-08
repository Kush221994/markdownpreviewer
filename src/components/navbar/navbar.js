import React from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbuttons">
          <Button variant="contained">
            <FavoriteIcon />{" "}
          </Button>
          <Button variant="contained">View In Editor</Button>
          <Button variant="contained">Sign Up</Button>
          <Button variant="contained">Log In</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
