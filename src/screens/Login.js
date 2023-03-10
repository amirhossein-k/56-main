import React, { useState, useEffect } from "react";
import { Col, Row, Card, Form, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import axios from "axios";
import "../styles/Login.css";
import { login } from "../actions/userActions";
//////////////////////////////////////
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// modal
import ReactLoading from "react-loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  /////////
  let navigate = useNavigate();
  const dispath = useDispatch();
  /////////
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  //////////
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  ///////////
  // useEffect(() => {
  //   dispath(login());
  // }, []);
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);
  /////
  const submithandler = async (e) => {
    e.preventDefault();

    dispath(login(email, password));
  };
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      {loading && (
        <div className="loading">
          <ReactLoading
            type={"bubbles"}
            color="#fff"
            height={"100%"}
            width={"100%"}
          />
        </div>
      )}
      <Row style={{ marginRight: 0, paddingRight: 0, minHeight: "100vh" }}>
        <Col xs={12} sm={6} style={{ padding: 0 }}>
          <div className="carlogin-img">
            <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1675870816/ville-kaisla-HNCSCpWrVJA-unsplash_zd4dza.jpg" />
          </div>
        </Col>
        <Col xs={12} sm={6} style={{ padding: 0 }}>
          {" "}
          <div className="info-login">
            <div className="border-my">
              <Form onSubmit={submithandler} className="form-fix">
                <Form.Group controlId="fromBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="User Name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" input-my"
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" input-my"
                  ></Form.Control>
                </Form.Group>

                <button
                  className="button"
                  style={{ padding: "10px 23px", marginTop: 10 }}
                  type="submit"
                >
                  ????????
                </button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
