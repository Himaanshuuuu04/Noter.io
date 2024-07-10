import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>@himaansh_uu ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
