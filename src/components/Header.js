import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <Button variant="info" size="lg" block>
        Search by First Name
      </Button>
      <Button variant="secondary" size="lg" block>
        Search by Email
      </Button>
    </div>
  );
}

export default Header;
