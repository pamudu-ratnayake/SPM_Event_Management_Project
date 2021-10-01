

import { useState } from "react";

// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip,
  CardHeader,
  CardBody,
  NavItem,
  CardTitle,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const AdminIndex = (props) => {
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
      <Header />
      {/* Page content */}
      <Container className="mt-4" fluid>
      <Card>
          <CardBody>
            <div className="chart">
              {/* Chart wrapper */}
              <Bar
                data={chartExample2.data}
                options={chartExample2.options}
              />
            </div>
          </CardBody>
        </Card>
        <Row className = "mt-3">
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Admin</th>
              <th scope="col">Name </th>
              <th scope="col">Contact Number</th>
              <th scope="col">Mail</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/MicrosoftTeams-image (6).png").default}
                    />
                  </a>
                 
                </Media>
              </th>
              <td>Pamudu Ratnayake</td>
              
              
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">0766501941</span>
                </div>
              </td>
              <td className="text-right">
              <div className="d-flex align-items-center">
                  <span className="mr-2">pamudumr@gmail.com</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/IMG-2400.JPG").default}
                    />
                  </a>
                 
                </Media>
              </th>
              <td>Hansani Hirunika</td>
              
              
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">0705253535</span>
                </div>
              </td>
              <td className="text-right">
              <div className="d-flex align-items-center">
                  <span className="mr-2">hansanihirunika7@gmail.com</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/oooshiii.jpeg").default}
                    />
                  </a>
                 
                </Media>
              </th>
              <td>Oshini Cooray</td>
              
              
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">0767846213</span>
                </div>
              </td>
              <td className="text-right">
              <div className="d-flex align-items-center">
                  <span className="mr-2">oshinicooray.98@gmail.com</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/team-4-800x800.jpg").default}
                    />
                  </a>
                 
                </Media>
              </th>
              <td>Malith Madusanka</td>
              
              
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">0770699151</span>
                </div>
              </td>
              <td className="text-right">
              <div className="d-flex align-items-center">
                  <span className="mr-2">malithmadusanka@gmail.com</span>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        </Row>
        <Row className = "mt-3">
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Traffic
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
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
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          New users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sales
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              
            </Row>
      </Container>
    </>
  );
};

export default AdminIndex;
