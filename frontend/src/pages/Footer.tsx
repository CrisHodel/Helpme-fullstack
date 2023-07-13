import React from 'react';
import {useNavigate} from "react-router-dom";
import "../css/footerPageCss/Footer.css";

export default function FooterPage(){

    const navigate = useNavigate();

    return(
      <footer className={"footer"}>
          <div id={"Impressum"}></div>
          <h3>Impressum</h3>
          <p>Company Name</p>
          <p>Address: Berliner Str, Hannover, Germany</p>
          <p>Email: info@example.com</p>
          <p>Phone: +176 550 3984</p>
          <p>Help people in need...</p>
      </footer>
    )
}