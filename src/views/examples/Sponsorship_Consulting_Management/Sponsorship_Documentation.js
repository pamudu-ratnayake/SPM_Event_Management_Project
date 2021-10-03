// Sponsorship_Documentation

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  CardText,
} from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
// core components
import UserHeaderSpnDocumentation from "components/Headers/UserHeaderSpnDocumentation.js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { event } from "jquery";
import logo from "../../../assets/img/theme/thebliss5.png";
import API from "variables/tokenURL";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  package: Yup.string().required("Required!"),
  amount: Yup.number().required("Required!"),
});

const Sponsorship_Documentation = (props) => {
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    package: "",
    amount: "",
  };

  const [posts, setPosts] = useState([]);
  const [pkg, setPackage] = useState([]);
  const [msg, setMsg] = useState("");

  const add = async (event) => {
    await event.preventDefault();
    console.log(event.target.pkg_name.value, event.target.amount.value);

    const formData = event.target;
    const newPkg = {
      pkg_name: formData.pkg_name.value,
      amount: formData.amount.value,
    };
    // console.log(newPkg);
    setPackage([...pkg, newPkg]);
    console.log(pkg);
  };

  const deletePkg = (itemIndex) => {
    console.log(itemIndex);

    const filtered = [...pkg].filter((c) => c.index !== itemIndex);
    console.log(filtered);
    setPackage(filtered);
  };

  useEffect(() => {
    API.get(`/eventAdd/getOneEvent/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  // const columns = [{ tittle: "Package Name", field: "Amount" }];

  const e_name = posts.event_name;
  const or_name = posts.org_name;
  const e_date = posts.date_of_the_event;
  const e_time = posts.event_time;
  const e_loct = posts.location;
  const e_days = posts.days_occurs?.toString();
  const e_type = posts.event_type;
  const orz_name = posts.organizer_name;
  const orz_email = posts.cus_email;
  const orz_cont = posts.cus_con_number;
  const e_disc = posts.description;
  const rqs = msg;
  const year = new Date().getFullYear().toString();
  // console.log("the value", rqs);
  const columns = [
    { title: "Package Name", dataKey: "pkg_name" },
    { title: "Amount (LKR.)", dataKey: "amount" },
  ];

  var rows = pkg.map((pkgs) => ({
    pkg_name: pkgs?.pkg_name,
    amount: pkgs?.amount,
  }));

  // const logo = require('../../../assets/img/logo/logo.png')
  const pdfGenerater = () => {
    var doc = new jsPDF("portrait", "px", "a4", false);
    // doc.addImage(logo, 'PNG', 65, 20, 400, 400)
    // doc.addPage()

    doc.addImage(logo, "PNG", 40, 10, 50, 50);
    doc.setFont("Helvertica", "bold");
    doc.setTextColor(100);
    doc.text(100, 40, "THE BLISS");
    doc.setLineWidth(1.5);
    doc.line(50, 65, 420, 65);

    doc.setFontSize(12);
    doc.setFont("Helvertica", "bold");
    doc.setTextColor("red");
    doc.text(160, 85, "SPONSORSHIP REQUEST");
    doc.setTextColor("Blue");
    doc.text(50, 110, "Event Information");
    doc.setFont("Helvertica", "Normal");
    doc.setTextColor("black");
    doc.text(50, 140, "Event Name");
    doc.text(50, 160, "Organization Name");
    doc.text(50, 180, "Event Date");
    doc.text(50, 200, "Event Time");
    doc.text(50, 220, "Location");
    doc.text(50, 240, "Days Occurs");
    doc.text(50, 260, "Event Type");
    doc.text(50, 280, "Organizer Name");
    doc.text(50, 300, "Organizer Email");
    doc.text(50, 320, "Organizer Contact No");
    doc.text(50, 340, "Event Discription");

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
    doc.text(170, 320, ":");
    doc.text(170, 340, ":");

    doc.setFont("Helvertica", "Normal");
    doc.text(180, 140, e_name);
    doc.text(180, 160, or_name);
    doc.text(180, 180, e_date);
    doc.text(180, 200, e_time);
    doc.text(180, 220, e_loct);
    doc.text(180, 240, e_days);
    doc.text(180, 260, e_type);
    doc.text(180, 280, orz_name);
    doc.text(180, 300, orz_email);
    doc.text(180, 320, orz_cont);
    doc.text(180, 340, e_disc);

    doc.text(50, 365, rqs);

    // doc.addPage();
    doc.setFont("Helvertica", "bold");
    doc.setTextColor("blue");
    doc.text(50, 400, "Sponsorship Criteria");

    doc.autoTable(columns, rows, {
      margin: { top: 420, bottom: 0, left: 100, right: 100 },
      theme: "striped",
    });

    doc.setLineWidth(1.5);
    doc.line(50, 600, 420, 600);

    doc.setTextColor(100);
    doc.setFontSize(8);
    doc.text(50, 610, "©");
    doc.text(60, 610, year);
    doc.setTextColor("red");
    doc.text(75, 610, "COPYRIGHT");

    doc.setTextColor("black");
    doc.text(310, 610, "* ALL RIGHTS RESERVED BY");
    doc.setTextColor("blue");
    doc.text(398, 610, "Hex Clan");

    doc.save("Sponsorship Request.pdf");
  };

  return (
    <>
      <UserHeaderSpnDocumentation />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card className="card-stats bg-white mb-4 mb-lg-0">
          <CardBody>
            {/* <Col> */}
            <Row>
              <Col className="order-xl-2 mb-5 mb-xl-1" xl="6">
                <Card
                  className="bg-secondary shadow"
                  style={({ width: "28rem" }, { height: "40rem" })}
                >
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h2 className="mb-0">Event Information</h2>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Event Name</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.event_name}</Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Organization Name</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.org_name}</Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Event Date</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.date_of_the_event}</Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Event Time</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.event_time}</Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Location</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.location}</Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Days Occurs</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.days_occurs}</Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Event Type</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">
                          <span>{posts.event_type}</span>
                        </Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Organizer Name</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.organizer_name}</Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Organizer Email</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.cus_email}</Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Organizer Contact No</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.cus_con_number}</Col>
                      </Row>
                    </CardText>

                    <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                      <Row>
                        <Col xs="5">Event Description</Col>
                        <Col xs="1">:</Col>
                        <Col xs="6">{posts.description}</Col>
                      </Row>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col className="order-xl-1" xl="6">
                <Card
                  className="bg-secondary shadow"
                  style={({ width: "28rem" }, { height: "40rem" })}
                >
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h2 className="mb-0">Sponsorship Information</h2>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={add}>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label style={{ paddingTop: "0.5rem" }}>
                              Add Sponsorship Criteria
                            </label>
                            <Row xs="">
                              <Col xs="5">
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Package Name"
                                  type="text"
                                  name="pkg_name"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.pkg_name}
                                />
                                {formik.touched.pkg_name &&
                                formik.errors.pkg_name ? (
                                  <div style={{ color: "red" }}>
                                    {formik.errors.pkg_name}
                                  </div>
                                ) : null}
                              </Col>
                              <Col xs="5">
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Amount in Rupees"
                                  type="text"
                                  name="amount"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.amount}
                                />
                                {formik.touched.amount &&
                                formik.errors.amount ? (
                                  <div style={{ color: "red" }}>
                                    {formik.errors.amount}
                                  </div>
                                ) : null}
                              </Col>

                              {/* Add Button */}
                              <Col lg={{ size: "auto" }} className="pt-2">
                                <Button
                                  className="btn-icon btn-3"
                                  color="primary"
                                  size="sm"
                                  type="submit"
                                  // onClick={add}
                                >
                                  <span className="btn-inner--icon">
                                    <i className="ni ni-fat-add" />
                                  </span>
                                </Button>
                              </Col>
                            </Row>
                          </FormGroup>
                          <Row style={{ paddingTop: "1rem" }}>
                            <span><h4>Packages</h4></span>
                          </Row>
                          <div>
                            {pkg.map((item, index) => {
                              return (
                                <Row xs="" key={index}>
                                  <Col xs="">
                                    <span className="h5">{item.pkg_name}</span>
                                  </Col>
                                  <Col xs="">
                                    <span className="h5">
                                      LKR.
                                      {item.amount}
                                    </span>
                                  </Col>
                                  <Col lg={{ size: "auto" }} className="pt-2">
                                    {/* <Button
                                    className="btn-icon btn-2"
                                    color="primary"
                                    size="sm"
                                    type="button"
                                    onClick={() => deletePkg(index)}
                                  >
                                    <span className="btn-inner--icon">
                                      <i className="ni ni-fat-delete" />
                                    </span>
                                  </Button> */}
                                  </Col>
                                </Row>
                              );
                            })}
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col style={{ paddingTop: "1rem" }}>
                          <FormGroup>
                            <label>Sponsorship Description</label>
                            <Row>
                              <Col>
                                <Input
                                  // onChange={}
                                  name="rqst"
                                  onInput={(e) => {
                                    setMsg(e.target.value);
                                  }}
                                  value={props.rqs}
                                  id="exampleFormControlTextarea1"
                                  placeholder="Sponsorship Request ..."
                                  rows="3"
                                  type="textarea"
                                />
                              </Col>
                            </Row>
                          </FormGroup>
                        </Col>
                      </Row>
                      <div>
                        <Button
                          color="success"
                          size="sm"
                          type="button"
                          onClick={pdfGenerater}
                        >
                          <span className="btn-inner--icon">
                          <i className="ni ni-folder-17" />
                        </span>
                        <span className="btn-inner--text">Download Document</span>
                          
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Sponsorship_Documentation;
