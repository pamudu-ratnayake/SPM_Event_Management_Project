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

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  package: Yup.string().required("Required!"),
  amount: Yup.string().required("Required!"),
});

const Sponsorship_Documentation = (props) => {
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    package: "",
    amount: "",
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/eventAdd/getOneEvent/${props.match.params._id}`)
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
    validationSchema,
  });

  return (
    <>
      <UserHeaderSpnDocumentation />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card className="card-stats mb-4 mb-lg-0">
          <CardBody>
            {/* <Col> */}
            <Row>
              <Col className="order-xl-2 mb-5 mb-xl-1" xl="6" >
                <Card className="bg-secondary shadow" style={({ width: "28rem" }, { height: "40rem" })}>
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h2 className="mb-0">Event Information</h2>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {/* <Card style={({ width: "30rem" }, { height: "3rem" }, {paddingTop: '1rem'})}>
                      <CardBody className="pt-1 pt-md-0"> */}
                        {/* <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Event Name</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">{posts.event_name}</Col>
                            </Row>
                          </CardText>
                        {/* </div> */}
                      {/* </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0"> */}
                        {/* <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Organization Name</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">
                                {posts.org_name}
                              </Col>
                            </Row>
                          </CardText>
                        {/* </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Event Date</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">{posts.date_of_the_event}</Col>
                            </Row>
                          </CardText>
                        {/* </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Event Time</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">{posts.event_time}</Col>
                            </Row>
                          </CardText>
                        {/* </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Location</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">{posts.location}</Col>
                            </Row>
                          </CardText>
                        {/* </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Days Occurs</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">{posts.days_occurs}</Col>
                            </Row>
                          </CardText>
                        {/* </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Event Type</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">
                                <span>{posts.event_type}</span>
                              </Col>
                            </Row>
                          </CardText>
                        {/* </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Organizer Name</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">{posts.organizer_name}</Col>
                            </Row>
                          </CardText>
                        {/* </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Organizer Email</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">{posts.cus_email}</Col>
                            </Row>
                          </CardText>
                        {/* </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Organizer Contact No</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">{posts.cus_con_number}</Col>
                            </Row>
                          </CardText>
                        {/* </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div> */}
                          <CardText className="h5" style={({paddingTop: '0.5rem'})}>
                            <Row>
                              <Col xs="5">Event Description</Col>
                              <Col xs="1">:</Col>
                              <Col xs="6">{posts.description}</Col>
                            </Row>
                          </CardText>
                        {/* </div> */}
                      {/* </CardBody>
                    </Card> */}
                  </CardBody>
                </Card>
              </Col>

              <Col className="order-xl-1" xl="6">
                <Card className="bg-secondary shadow" style={({ width: "28rem" }, { height: "40rem" })}>
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h2 className="mb-0">Sponsorship Information</h2>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      
                      <Row>
                        <Col>
                          <FormGroup>
                            <label style={{paddingTop: '0.5rem'}}>Add Sponsorship Criteria</label>
                            <Row xs="">
                              <Col xs="5">
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Package Name"
                                  type="text"
                                  name="package"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.package}
                                />
                                {formik.touched.package &&
                                formik.errors.package ? (
                                  <div style={{ color: "red" }}>
                                    {formik.errors.package}
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
                              <Col lg={{ size: "auto" }} className="pt-2">
                                <Button
                                  className="btn-icon btn-3"
                                  color="primary"
                                  size="sm"
                                  type="button"
                                >
                                  <span className="btn-inner--icon">
                                    <i className="ni ni-fat-add" />
                                  </span>
                                </Button>
                              </Col>
                            </Row>
                          </FormGroup>
                          <Row style={{ paddingTop:'1rem' }}>
                          <span>Packages</span>
                          </Row>
                          <Row xs="">
                            <Col xs="">
                              <span className="h5" style={{ font: "menu" }}>
                                Package Description
                              </span>
                            </Col>
                            <Col xs="">
                              <span className="h5">.col-6</span>
                            </Col>
                            <Col lg={{ size: "auto" }} className="pt-2">
                              <Button
                                className="btn-icon btn-2"
                                color="primary"
                                size="sm"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-fat-delete" />
                                </span>
                              </Button>
                            </Col>
                          </Row>
                          <Row xs="">
                            <Col xs="">
                              <span className="h5" style={{ font: "menu" }}>
                                Package Description
                              </span>
                            </Col>
                            <Col xs="">
                              <span className="h5">.col-6</span>
                            </Col>
                            <Col lg={{ size: "auto" }} className="pt-2">
                              <Button
                                className="btn-icon btn-2"
                                color="primary"
                                size="sm"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-fat-delete" />
                                </span>
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ paddingTop:'1rem' }}>
                          <FormGroup>
                            <label>Sponsorship Description</label>
                            <Row>
                              <Col>
                                <Input
                                  id="exampleFormControlTextarea1"
                                  placeholder="Write a large text here ..."
                                  rows="3"
                                  type="textarea"
                                  name="description"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.description}
                                />
                                {formik.touched.description &&
                                formik.errors.description ? (
                                  <div style={{ color: "red" }}>
                                    {formik.errors.description}
                                  </div>
                                ) : null}
                              </Col>
                            </Row>
                          </FormGroup>
                        </Col>
                      </Row>
                      <div>
                        <Button color="primary" size="sm" type="button">
                          Creat Document
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
