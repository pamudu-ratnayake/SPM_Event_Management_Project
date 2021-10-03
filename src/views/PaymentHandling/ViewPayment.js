import { useState, useEffect } from "react";
import BoostHeader from "components/Headers/AdvertisementHandling&BoostingHeaders/BoostHeader";
import {Link} from "react-router-dom"
import "jspdf-autotable";
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


const ViewPayment = (props) => {
  console.log("Id is: ", props.match.params._id);

  const [addsData,setAdd] = useState(0);

  useEffect(() => {
   API
      .get(`/payment/get/${props.match.params._id}`)
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
      <BoostHeader />
      {/* Page content */}
      <Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Payment Information</h2>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <Card style={{ width: "61.3rem" }}>
                
                  
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
                                Payment ID
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
                                Type ID
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.type_id}
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
                                User Name
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.user_name}
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
                                User Email
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">: {addsData.user_email}</span>
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
                                Payement Date
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.payment_date}
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
                                user ID 
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.user_id}
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
                                Type Name
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.type_name}
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
                                Total
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.total}
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
                                Type
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData.type}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>
                 
            
            <div className = "mt-5">
              <Row>
                  <Col>
                  <Link to={`/admin/paidlist`}>
                    <Button
                      className="ml-16 mr-8"
                      color="primary"
                     
                    >
                      Close
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

export default ViewPayment;
