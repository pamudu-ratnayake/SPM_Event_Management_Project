import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import jsPDF from "jspdf";
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
import logo from '../../assets/img/theme/thebliss5.png';

const ViewPayment = (props) => {
  console.log("Id is: ", props.match.params._id);

  const [addsData,setAdd] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/payment/get/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setAdd(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



//   const columns = [    { title: "Package Name", dataKey: "pkg_name" },   
// { title: "Amount (LKR.)", dataKey: "amount" }  ];  
// var rows =addsData.map((pkgs) => ({    pkg_name: pkgs?.pkg_name,   
//    amount: pkgs?.amount  }));

const Payment_ID = addsData._id;
const Type_ID = addsData.type_id;
const User_ID = addsData.user_id;
const User_Name = addsData.user_name;
const User_Email = addsData.user_email;
const Payment_Date = addsData.payment_date;
const Type = addsData.type;
const Type_name = addsData.type_name;
const Tot = addsData.total;




  const pdfGenerater = () => {
    var doc = new jsPDF("portrait", "px", "a4", false);
    // doc.addImage(logo, 'PNG', 65, 20, 400, 400)
    // doc.addPage()

    console.log('generate PDF')

    doc.addImage(logo, "PNG", 40, 10, 50, 50);
    doc.setFont("Helvertica", "bold");
    doc.setTextColor(100);
    doc.text(100, 40, "THE BLISS");
    doc.setLineWidth(1.5);
    doc.line(50, 65, 420, 65);

    doc.setFontSize(12)
    doc.setFont("Helvertica", "bold");
    doc.setTextColor("red");
    doc.text(160, 85, "Payment Reciept");
    doc.setTextColor("Blue");
    doc.text(50, 110, "Payment Information");
    doc.setFont("Helvertica", "Normal");
    doc.setTextColor("black");
    
    doc.text(50, 140, "Payment ID");
    doc.text(50, 160, "Type ID");
    doc.text(50, 180, "User ID");
    doc.text(50, 200, "User Name");
    doc.text(50, 220, "User Email");
    doc.text(50, 240, "Payment Date");
    doc.text(50, 260, "Total Payment");
    doc.text(50, 280, "Type");
    doc.text(50, 300, "Type Name");
   
   
    

    doc.setFont("Helvertica", "Normal");
    doc.text(170, 140, ":");
    doc.text(170, 160, ":");
    doc.text(170, 180, ":");
    doc.text(170, 200, ":");
    doc.text(170, 220, ":");
    doc.text(170, 240, ":");
    doc.text(170, 260, ":");
    doc.text(170, 280, ":");
    doc.text(170, 300, ":");
    

    doc.setFont("Helvertica", "Normal");
    doc.text(180, 140, Payment_ID);
    doc.text(180, 160, Type_ID);
    doc.text(180, 180, User_ID);
    doc.text(180, 200, User_Name);
    doc.text(180, 220, User_Email);
    
    doc.text(180, 240, Payment_Date);
    doc.text(180, 260,Tot);
    doc.text(180, 280, Type);
    doc.text(180, 300, Type_name);
 

    doc.text(50, 365, "rqs");

    // doc.addPage();
    doc.setFont("Helvertica", "bold");
    doc.setTextColor("black");
    doc.text(50, 400, "If you have any enquiries please e-mail to us");

    // doc.autoTable(columns, rows, {
    //   margin: { top: 420, bottom: 0, left: 100, right: 100 },
    //   theme: "grid",
    // });

    doc.setLineWidth(1.5);
    doc.line(50, 600, 420, 600);

    doc.setTextColor(100);
    doc.setFontSize(8);
    doc.text(50, 610, "©");
    doc.text(60, 610, "year");
    doc.setTextColor("red");
    doc.text(75, 610, "COPYRIGHT");

    doc.setTextColor("black");
    doc.text(310, 610, "* ALL RIGHTS RESERVED BY");
    doc.setTextColor("blue");
    doc.text(398, 610, "Hex Clan");

    doc.save("Payment Reciept.pdf");
  };



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
           
                    <Button
                      className="ml-16 mr-8"
                      color="primary"
                      type="button"
                      onClick={() => pdfGenerater()}>
                      Generate PDF
                    </Button>
                    
                  </Col>
                  <Col>
                    
                    <Button
                      className="ml-16 mr-8"
                      color="primary"
                     
                    >
                      Close
                    </Button>
                   
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
