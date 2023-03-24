import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <div sx={{ flexGrow: 1, position: "sticky" }}>
        <div position="static">
          <div style={{ backgroundColor: "black" }}>
            <div variant="h6" color="inherit" component="div">
              Contacts
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
