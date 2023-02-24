import React, { useState, useEffect } from "react";
import { Container, Col, Form } from "react-bootstrap";
import InputModule from "../Input/Input";
import "../../styles/Search.css";
import { InputLabel } from "@mui/material";
import FormControls from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
const Search = ({
  setSearchInput,
  searchResult,
  setSearchResult,
  searchInput,
  products,
  carname,
  setCarname,
  setProducts,
  setFactory,
  factory,
  setPrice,
  price,
  setBuild,
  build,
  fuel,
  setFuel,
}) => {
  // const handleSearch = (e) => {
  //   setSearchInput(e.target.value);
  //   let searchFruits = product.filter((fruit) => {
  //     return e.target.value !== "" && product.includes(e.target.value);
  //   });
  //   setSearchResult(searchFruits);
  // };

  // const [carname, setCarname] = useState("");

  return (
    <>
      <Col xl={2} md={2} sm={2} className="justify coll">
        {/* <InputModule searchInput={searchInput} handleSearch={handleSearch}>keyword</InputModule> */}
        <input
          id="carname"
          className="inputstyle"
          type="text"
          placeholder={"اسم ماشین"}
          value={carname}
          // onChange={e=>setCarname(e.target.value)}
          onChange={(e) => setCarname(e.target.value)}
        />
      </Col>
      <Col xl={2} md={2} sm={2} className="justify coll">
        <input
          id="factory"
          className="inputstyle"
          type="text"
          placeholder={"کارخانه"}
          value={factory}
          onChange={(e) => setFactory(e.target.value)}
        />
      </Col>
      {/* <Col xl={2} md={2} sm={2} className="justify coll">
        <input
          className="inputstyle"
          type="text"
          placeholder={"مصرف سوخت"}
          value={fuel}
          onChange={e=>setFuel(e.target.value)}
        />
      </Col> */}
      {/* <Col xl={2} md={2} sm={2} className="justify coll">
        <input
          className="inputstyle"
          type="text"
          placeholder={"سال ساخت"}
          value={build}
          onChange={e=>setBuild(e.target.value)}
        />
      </Col> */}
      <Col xl={2} md={2} sm={2} className="justify coll">
      <input
          className="inputstyle"
          type="text"
          placeholder={"قیمت"}
          value={price}
          onChange={e=>setPrice(e.target.value)}
        />
      </Col>

      {/* {(() => {
       
      
      })()} */}



      <Col xl={2} md={2} sm={2} className="justify coll">
        <button className="button fixed">Search</button>
      </Col>
    </>
  );
};

export default Search;
