import React, { useState, useEffect } from "react";

import { IoIosPeople } from "react-icons/io";
import { BiSearch, BiLogOut } from "react-icons/bi";
import { GiCalendar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(open ? false : true);
    console.log(open);
  };

  return (
    <>
      <div className={open ? "sidebar" : "sidebar shrink"}>
        <div
          onClick={handleClick}
          className={open ? "open arrow" : "close arrow"}
        >
          {open ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
        </div>
        <div className="profile">
          <div className="icon">B</div>
          <div className={open ? "info" : "hide"}>
            <p>name</p>
            <p>dummy</p>
          </div>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <IoIosPeople className={open ? "" : "large"} />{" "}
            <p className={open ? "" : "hide"}>Clients</p>
          </Link>
          <Link className="link" to="/">
            <BiSearch className={open ? "" : "large"} />{" "}
            <p className={open ? "" : "hide"}>Search</p>
          </Link>
          <Link className="link" to="/">
            <GiCalendar className={open ? "" : "large"} />{" "}
            <p className={open ? "" : "hide"}>Status</p>
          </Link>
        </div>
        <div className="logout">
          <Link className="link" to="/">
            <BiLogOut className={open ? "" : "large"} />{" "}
            <p className={open ? "" : "hide"}>Logout</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
