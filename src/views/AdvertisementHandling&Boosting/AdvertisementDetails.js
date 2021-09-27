import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import API from "variables/tokenURL"


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

//--------axios--------
import axios from "axios";

const AdvertisementDetails = (props) => {
  console.log("Id is: ", props.match.params._id);

  const [addsData, setAdd] = useState(0);

  useEffect(() => {
    axios
    .get(`http://localhost:8080/advertisement/get/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setAdd(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* <BoostAddHeader /> */}
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
                  style={{ padding: "3rem" }}
                  alt="..."
                  className="mt-5 ml-10 mr-10"
                  src={require("assets/img/theme/kk.jpg").default}
                  top
                />
                  <CardHeader style={{ fontSize: "2rem" }}>
                    Advertisement Details
                  </CardHeader>
                <CardBody style={{ padding: "2rem" }}>

                  {/* <CardText>Service Provider Name  :  {addsData.service_Provider_Name}</CardText> */}
                  {/* <CardText>Customer Email :  {addsData.email_SP}</CardText>
             <CardText>Contact Number  :{addsData.contact_Number_SP}</CardText>
             <CardText>Service Type :{addsData.service_Type}</CardText>
             <CardText>Available Duration : {addsData.advertisement_Duration}</CardText>
             <CardText>Advertisement Description :{addsData.advertisement_Duration}</CardText>
             <CardText>Upload Advertisement Picture :{addsData.advertisement_Des}</CardText>
             <CardText>Payment Type :{addsData.advertisement_Pic}</CardText> */}
                  
                  
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
                              Service Provider ID  
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
                             Advertisement ID
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData._id}
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
                              Service Provider Email
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
                              Service Provider Contact Number
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
                                Advertisement Picture
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.advertisement_Pic}
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
            <div>
                  <Col style={{paddingLeft:'29rem'}}>
                    <Link to={`/admin/updateadvertisement/${addsData._id}`}>
                    <Button
                      className="ml-16 mr-8"
                      color="primary"
                     
                    >
                       Update the Details
                    </Button>
                    </Link>
                  </Col>
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

export default AdvertisementDetails;
