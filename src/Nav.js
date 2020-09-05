import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix logo"
      />
      <img
        className="nav_avatar"
        src="https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABZ38JkaWCtLjMVEX-q8wgfuYV4gDKt9n5vC1l1pv7vdMEJWICbkBDkKMZ7koc7IEns2kpGA-UUDAM5bvS1JuvJaTX16z.png?r=dd1"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
