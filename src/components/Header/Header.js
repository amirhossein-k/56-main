import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { logoutAction } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Header = ({
  userInfo,
  datail,
  setDetail,
  title,
  subtitle,
  header_img,
  profile_img,
}) => {
  const dispatch = useDispatch();
  const [metr, setMetr] = useState("");
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    var navlist = document.getElementById("navbar");
    if (window.pageYOffset > metr) {
      navlist.classList.add("sticky");
    } else {
      navlist.classList.remove("sticky");
    }
  }
  //////////

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <header
      id="header"
      ref={(el) => {
        if (!el) return;

        console.log(el.getBoundingClientRect().bottom); // prints 200px
        setMetr(el.getBoundingClientRect().bottom);
      }}
    >
      <div
        id="head"
        className="parallax d-flex align-items-center justify-content-center"
        parallax-speed="2"
        style={{
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background: `#f4f4f4 url(${datail ? header_img : null})`,
        }}
      >
        <h1
          id="logo"
          className="text-center d-flex flex-column justify-content-center align-items-center"
        >
          <img
            className="img-circle "
            // src="https://res.cloudinary.com/dijamrzud/image/upload/v1675870663/download_zcmjg2.jpg"
            src={datail && profile_img}
            alt=""
          />
          <div className="back-fade">
            {" "}
            <span className="title">{datail && title}</span>
          </div>
          <div className="back-fade my-2" style={{ background: "#adb5bd57" }}>
            <span className="tagline">
              {/* A mystery person */}
              {datail && subtitle}
              <a href="">anthony.russel42@example.com</a>
            </span>
          </div>
        </h1>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Container fluid>
          <Navbar.Brand href="/">اتو امیر</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">صفحه اصلی</Nav.Link>
              <Nav.Link href="/about">درباره ما</Nav.Link>
            </Nav>
            {userInfo ? (
              <NavDropdown
                title={`${userInfo.name}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/dashboard">
                  داشبورد مدیریت
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">ورود</Nav.Link>
            )}
            <Nav>
              <Nav.Link href="#deets">لیست ماشین ها</Nav.Link>
            </Nav>

            {/* <Nav>
              <Nav.Link href="/login">ورود</Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
