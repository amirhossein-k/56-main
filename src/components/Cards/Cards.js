import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { Col, Row, Card } from "react-bootstrap";
import "../../styles/Cards.css";
// import { Cars } from "../../untils/Cars";
import cash_logo from "../../public/cash.svg";
import car_logo from "../../public/carlogo.svg";
import kilo_logo from "../../public/kilo.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../actions/productActions";
import { useNavigate, generatePath, Link } from "react-router-dom";

const Cards = ({ cardrun, setCardrun, Search }) => {
  const dispatch = useDispatch();
  const [Id, setId] = useState(null);
  const productList = useSelector((state) => state.productList);
  const { product, loading } = productList;

  const [products, setProducts] = useState(null);
  ///
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [carname, setCarname] = useState("");
  const [factory, setFactory] = useState("");
  const [fuel, setFuel] = useState("");
  const [build, setBuild] = useState("");
  const [price, setPrice] = useState("");
  ////
  useEffect(() => {
    setCardrun(true);
  }, []);
  useEffect(() => {
    console.log(cardrun, "card ...");
    if (cardrun === true) {
      dispatch(listProductAction());
      setCardrun(false);
    }
  }, [cardrun]);

  useEffect(() => {
    console.log("resultsearch");
    console.log(products, "prod");
  }, [products]);

  useEffect(() => {
    setProducts(product);
    console.log(products);
  }, [product]);

  const navigate = useNavigate();

  console.log(product, "product");
  return (
    <>
      <Row className="justify-content-center align-items-center d-flex gap-3 p-3 shadow mt-2 mb-2 gx-0">
        <Search
          setSearchInput={setSearchInput}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          searchInput={searchInput}
          products={products}
          setCarname={setCarname}
          carname={carname}
          setProducts={setProducts}
          setFactory={setFactory}
          factory={factory}
          setFuel={setFuel}
          fuel={fuel}
          build={build}
          setBuild={setBuild}
          price={price}
          setPrice={setPrice}
        />
      </Row>
      {loading && <h1>درحال خواندن دیتا هستیم منتظر بمانید</h1>}

      {products &&
        products
          ?.reverse()
          .filter(
            (items) =>
              items.namecar.toLowerCase().includes(carname.toLowerCase()) &&
              items.factory.toLowerCase().includes(factory.toLowerCase()) &&
              // items.build.toLowerCase().includes(build.toLowerCase())   &&
              items.price.toLowerCase().includes(price.toLowerCase()) 
              // items.factory.toLowerCase().includes(build.toLowerCase())
          )
          .map((item) => {
            return (
              <Card
                className="pruduct"
                key={item.id}
                onClick={(e) => navigate(`/products/${item.id}`)}
              >
                <Card.Img
                  variant="top"
                  alt=""
                  src={`${item.pic[0]}`}
                  style={{ height: "240px" }}
                />
                <Card.Title className="name">{item.namecar}</Card.Title>

                <Card.Body
                  className="box"
                  style={{ flexDirection: "row", display: "flex" }}
                >
                  <Card.Text style={{ margin: " 0 5px" }}>
                    {" "}
                    <Card.Img src={cash_logo} className="imgg" alt="jjj" />{" "}
                    {item.price} toman{" "}
                  </Card.Text>
                  <Card.Text style={{ margin: " 0 5px" }}>
                    <Card.Img src={car_logo} className="imgg" alt="jjj" />{" "}
                    {item.factory}
                  </Card.Text>
                  <Card.Text style={{ margin: " 0 5px" }}>
                    <Card.Img src={kilo_logo} className="imgg" alt="jjj" />{" "}
                    {item.distance}
                  </Card.Text>
                </Card.Body>
                <div class="card-footer">
                  {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                  {/* <Link to={`/products/${item.id}`}></Link> */}
                </div>
              </Card>
            );
          })}
      <div className="con-btn">
        <button className="buttonn">Show More</button>
      </div>
    </>
  );
};

export default Cards;
