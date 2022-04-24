import React from "react";

const Footer = () => {
  return (
    <div className="footer flex absolute-center max-width">
      Made with ❤️ by{" "}
      <a
        style={{ color: "white", textDecoration: "none", margin: 10 }}
        href="https://www.twitter.com/konfavian"
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        Ritik Sinha
      </a>
    </div>
  );
};

export default Footer;
