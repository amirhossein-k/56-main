import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./homeDashboard.scss";
import Sidebar from "../../../components/Dashboard/sidebar/Sidebar";
// import Navbar from "../../../components/DashboardDashboard/navbar/Navbar";
import Widgets from "../../../components/Dashboard/widgets/Widgets";
import Featured from "../../../components/Dashboard/featured/Featured";
import Chart from "../../../components/Dashboard/chart/Chart";
import Tables from "../../../components/Dashboard/tables/Tables";
import { Container, Col, Row } from "react-bootstrap";
////////////

import axios from "axios";
import { listProductAction } from "../../../actions/productActions";
////////////////

const HomeDashboard = ({ setCardrun, cardrun }) => {

  let dates= new Date()
  let yearcurrent = dates.toJSON().slice(0,5);
  let datecurrentmonth = dates.toJSON().slice(0,7);
  let datedaycurrent =dates.toJSON().slice(0,10)
  let beforemonth = Number(datecurrentmonth.slice(5,7)) -1
  let beforemonthcurrent;
  if(beforemonth<10){
    beforemonthcurrent = yearcurrent + '0' + String(beforemonth)
  }else{
    beforemonthcurrent = yearcurrent  + String(beforemonth)
  }
  console.log(beforemonthcurrent,'befo')
  
  
  const [amountcar,setAmountcar]=useState(0)
 
  const [amountorder,setAmountorder]=useState(0)
  const [amountorderr,setAmountorderr]=useState([])
  const [amountearing,setAmountearing]=useState(0)
  const [amountbalance,setAmountbalance]=useState(0)

  useEffect(() => {
    console.log(cardrun, "dashboard");
    setCardrun(true);
  
  }, []);
  useEffect(() => {
    if (cardrun === true) {
      dispatch(listProductAction());
      setCardrun(false);
      
    }
  }, [cardrun]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { product, loading } = productList;

  // const fetch = useMemo(() => {
  //   dispatch(listProductAction());
  // }, []);
  // useEffect(() => {}, []);
  console.log(product,'ooo')
  var approved =[];
  var totalapproved=0;

  let sold = []
  let totalsoldcost = []
  let totalsold =0

  let totaldate = []
  let filtermonth=[];
  let costmonth = 0;
  let filterday =  [];
  let costday = 0;
  let filterbeforemonth=  [];
  let costbeforemonth= 0;
  
  if(product){
    for(let i=0; i< product.length; i++){
      if(product[i].status=== 'sold'){
        sold.push(product[i])
        // console.log(sold)
        
      }
      if(product[i].status === "approved"){
        approved.push(product[i])
       
      }
      if(product[i].date.slice(0,7) === datecurrentmonth){
        filtermonth.push(product[i])
      }
      if(product[i].date.slice(0,10) === datedaycurrent){
        filterday.push(product[i])
      }
      if(product[i].date.slice(0,7) === beforemonthcurrent){
        filterbeforemonth.push(product[i])
      }
      
    }
    for(let j=0;j<sold.length;j++){
      totalsoldcost+=Number(sold[j].price)
      totalsold += 1
    }
   
    for(let j=0;j<approved.length;j++){
      totalapproved+= 1
    }

    for(let j=0;j<product.length;j++){
      totaldate.push(product[j].date)

    }
   for(let j=0;j<filtermonth.length;j++){
      costmonth += Number(filtermonth[j].price)
   }
   for(let j=0;j<filterday.length;j++){
    costday += Number(filterday[j].price)
   }
   for(let j=0;j<filterbeforemonth.length;j++){
    costbeforemonth += Number(filterbeforemonth[j].price)
   }

    
    console.log(filtermonth,'filter')
    console.log(datecurrentmonth,'current')
   
   
  }

  return (
    <Container
      fluid
      style={{
        minWidth: 100,
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Row
        className="home g-0"
        style={{ marginLeft: 0, marginRight: 0, backgroundColor: "initial" }}
      >
        <Col
          className="g-0 flex-basis-0"
          style={{
            paddingRight: 0,
            maxWidth: "100vh",
            paddingLeft: 0,
            mimWidth: "100%",
          }}
          xs={12}
          // sm={1}
          md={2}
          lg={2}
        >
          <Sidebar />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }} className="g-0">
          <div className="homeContainer g-0">
            {/* option  */}
            {/* <Navbar /> */}
            <div className="widgets row">
              <Col md={6} lg={3} className="fix-col-md-6">
                <Widgets type="user" amountcar={amountcar} totalapproved={totalapproved}/>
              </Col>
              <Col md={6} lg={3} className="fix-col-md-6">
                {" "}
                <Widgets type="order" amountorder={amountorder} totalsold={totalsold} />
              </Col>
              <Col md={6} lg={3} className="fix-col-md-6">
                <Widgets type="erarning" amountearing={amountearing} totalsoldcost={totalsoldcost} />
              </Col>
              <Col md={6} lg={3} className="fix-col-md-6">
                {" "}
                <Widgets type="balance" amountbalance={amountbalance}/>
              </Col>
            </div>
            {/* //charts className */}
            <div className="  row ">
              <Col xs={12} sm={11} md={4} className="sm-fix">
                <Featured costmonth={costmonth} costday={costday} costbeforemonth={costbeforemonth}/>
              </Col>
              <Col
                xs={12}
                sm={11}
                md={8}
                style={{ maxWidth: "99%" }}
                className="sm-fix"
              >
                <Chart title={"Last 12 month"} aspect={2 / 1} />
              </Col>
            </div>
            <div className="row listContainer">
              <Col xs={11}>
                <div className="listTitle"> Last Transcations </div>
                <Tables />
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeDashboard;
