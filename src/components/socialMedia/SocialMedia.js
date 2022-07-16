import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.dev}
        className="icon-button dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-dev"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.codewars}
        className="icon-button codewars"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-code-compare"></i>
        <span></span>
      </a>
    </div>
  );
}
