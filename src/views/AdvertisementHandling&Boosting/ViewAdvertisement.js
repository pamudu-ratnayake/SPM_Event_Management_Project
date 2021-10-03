import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import * as Yup from "yup";
// core components
import axios from "axios";
import API from "variables/tokenURL";

const ViewAdvertisement = (props) => {
  console.log("Id is: ", props.match.params._id);

  const [addsData, setAdd] = useState([]);

  useEffect(() => {
    API.get(`/advertisement/get/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setAdd(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("img here", addsData.advertisement_Des);

  return (
    <>
      {/* Page content */}
      <Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Advertisement Information</h2>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <Card style={{ width: "61.3rem" }}>
                <CardImg
                  style={{ width: "20 rem", height: "30rem", padding: "3rem" }}
                  alt="..."
                  top
                  src={addsData?.advertisement_Pic}
                />
                <CardHeader style={{ fontSize: "2rem" }}>
                  Advertisement Details
                </CardHeader>
                <CardBody style={{ padding: "2rem" }}>
                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Service Provider Name
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.service_Provider_Name}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Customer Email
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">: {addsData.email_SP}</span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Contact Number
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.contact_Number_SP}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Service Type
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.service_Type}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Advertisement Available Duration
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.advertisement_Duration}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Advertisement Title
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.advertisement_title}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Advertisement Description
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.advertisement_Des}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>
                  {/* <Card
             style={({ width: "28rem" }, { height: "2.5rem" })}
              className="mb-4">
            <CardBody className="pt-1 pt-md-0">
                <div>
                  <CardText>
                    <Row>
                      <Col xs="3">
                        <span className="h5" style={{ font: "menu" }}>
                        Payment Type
                        </span>
                      </Col>
                      <Col xs="6">
                        <span className="h5">:  {addsData.cardtype}</span>
                      </Col>
                    </Row>
                  </CardText>
                </div>
              </CardBody>
            </Card>  */}

                  <div className="mt-5">
                    <Row>
                      <Col>
                        <Link to={`/serviceprovider/boostAdd/${addsData._id}`}>
                          <Button className="ml-16 mr-8" color="primary">
                            <span className="btn-inner--icon">
                              <i className="ni ni-credit-card" />
                            </span>
                            <span className="btn-inner--text">
                              Boost My Advertisement
                            </span>
                          </Button>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={`/serviceprovider/updateadvertisement/${addsData._id}`}
                        >
                          <Button className="ml-16 mr-8" color="primary">
                            <span className="btn-inner--icon">
                              <i className="ni ni-ruler-pencil" />
                            </span>
                            <span className="btn-inner--text">
                              Update My Advertisement
                            </span>
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewAdvertisement;
