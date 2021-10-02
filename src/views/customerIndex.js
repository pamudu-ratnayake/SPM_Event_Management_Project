import { useState } from "react";
import Slider from "components/Slider/Slider";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { Button, Card, CardTitle, CardHeader, CardBody, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";

// core components
import { chartOptions, parseOptions, chartExample1, chartExample2 } from "variables/charts.js";

import CustomerIndexHeader from "components/Headers/CustomerIndexHeader";

const CustomerIndex = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <CustomerIndexHeader />

      {/* Page content */}
      <Container className="mt-4" fluid>
        {/* <Row>
        <Col md="6" >
          <div className="mt--7" >
          <Slider  />
          </div>
        </Col>
        <Col md="6" >
          <div className="mt--7" >
          <Slider  />
          </div>
        </Col>
      </Row> */}


          {/* Card stats */}
          <Row>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                        Traffic
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-chart-bar" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                        Traffic
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-chart-bar" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                        Traffic
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-chart-bar" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>


        {/* <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage: "url(" + require("../assets/img/theme/event11.jpg").default + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        /> */}
      </Container>
    </>
  );
};

export default CustomerIndex;
