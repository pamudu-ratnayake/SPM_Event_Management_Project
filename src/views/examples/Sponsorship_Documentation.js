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

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// const validationSchema = Yup.object({
//   package: Yup.string().required("Required!"),
//   amount: Yup.string().required("Required!"),
// });

const Sponsorship_Documentation = (props) => {
  // const initialValues = {
  //   enableReinitialize: true,
  //   validateOnMount: true,
  //   package: "",
  //   amount: "",
  // };

  const [posts, setPosts] = useState([]);
  const [pkg, setPackage] = useState([]);

  // const onAddPackage = onAddPackage = (e) => {
  //   console.log("test");
  //   e.preventDefault();
  //   const newPkg = newPkg.value;

  //   setPackage({
  //       // nameInput: '',
  //       pk: [...pkg, newPkg]
  //   })
  // }

  const add = (event) => {
    event.preventDefault();
    // console.log(event.target.pkg_name.value);

    const formData = event.target;
    const newPkg = {
      pkg_name: formData.pkg_name.value,
      amount: formData.amount.value,
    };
    // console.log(newPkg);
    setPackage([...pkg, newPkg]);
    // console.log(pkg);
  };

  const deletePkg = itemIndex => {
    console.log(itemIndex);

    const filtered = [...pkg].filter(c => c.index !== itemIndex);
    setPackage(filtered);
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/eventAdd/getOneEvent/${props.match.params._id}`
      )
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  // });

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
                                />
                              </Col>
                              <Col xs="5">
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Amount in Rupees"
                                  type="text"
                                  name="amount"
                                />
                              </Col>

                              {/* Add Button */}
                              <Col lg={{ size: "auto" }} className="pt-2">
                                <Button
                                  className="btn-icon btn-3"
                                  color="primary"
                                  size="sm"
                                  type="submit"
                                >
                                  <span className="btn-inner--icon">
                                    <i className="ni ni-fat-add" />
                                  </span>
                                </Button>
                              </Col>
                            </Row>
                          </FormGroup>
                          <Row style={{ paddingTop: "1rem" }}>
                            <span>Packages</span>
                          </Row>
                          {pkg.map((item, index) => {
                            return (
                              <Row xs="" key={index}>
                                <Col xs="">
                                  <span className="h5">
                                    {item.pkg_name}
                                  </span>
                                </Col>
                                <Col xs="">
                                  <span className="h5">LKR. {item.amount}</span>
                                </Col>
                                <Col lg={{ size: "auto" }} className="pt-2">
                                  <Button
                                    className="btn-icon btn-2"
                                    color="primary"
                                    size="sm"
                                    type="button"
                                    onClick={() => deletePkg(item.index)}
                                  >
                                    <span className="btn-inner--icon">
                                      <i className="ni ni-fat-delete" />
                                    </span>
                                  </Button>
                                </Col>
                              </Row>
                            );
                          })}
                        </Col>
                      </Row>

                      <Row>
                        <Col style={{ paddingTop: "1rem" }}>
                          <FormGroup>
                            <label>Sponsorship Description</label>
                            <Row>
                              <Col>
                                <Input
                                  id="exampleFormControlTextarea1"
                                  placeholder="Write a large text here ..."
                                  rows="3"
                                  type="textarea"
                                />
                              </Col>
                            </Row>
                          </FormGroup>
                        </Col>
                      </Row>
                      <div>
                        <Button color="primary" size="sm" type="button">
                          Create Document
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
