import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with{" "}
          <span role="img">
            <span className="iconify" data-icon="bi:balloon-heart-fill" />
          </span>{" "}
          by {greeting.title2} @2022
        </p>
      </Fade>
    </div>
  );
}
