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
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Table,
  CardText,
  CardImg,
  CardTitle,
  Label,
} from "reactstrap";
// core components
import UserHeaderSpnDocumentation from "components/Headers/UserHeaderSpnDocumentation.js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  oEmail: Yup.string().email("Invalid Email!").required("Required!"),
  oContactNo: Yup.string()
    .matches(phoneRegExp, "Phone Number is not Valid!")
    .required("Required!")
    .min(10, "Too short")
    .max(10, "Too long"),
  package: Yup.string().required("Required!"),
  amount: Yup.string().required("Required!"),
});

const Sponsorship_Documentation = () => {
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    oEmail: "",
    oContactNo: "",
    package: "",
    amount: "",
  };

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
              <Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h2 className="mb-0">Event Information</h2>
                      </Col>
                    </Row>
                    {/* <hr className="my-4" /> */}
                  </CardHeader>
                  <CardBody>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Event Name</Col>
                              <Col xs="6">
                                Annual Get Together of NIBM Students
                              </Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Organization Name</Col>
                              <Col xs="6">
                                National Institute of Business Management (NIBM)
                              </Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Event Time</Col>
                              <Col xs="6">6.00 PM</Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Location</Col>
                              <Col xs="6">Cinnamon Grand, Ball Room</Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Days Occurs</Col>
                              <Col xs="6">2</Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Event Type</Col>
                              <Col xs="6">
                                <span className="h5">Indoor</span>
                              </Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Organizer Name</Col>
                              <Col xs="6">Hansani Bandara</Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Organizer Email</Col>
                              <Col xs="6">hansani@gmail.com</Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Organizer Contact No</Col>
                              <Col xs="6">0702548561</Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText className="h5">
                            <Row>
                              <Col xs="5">Event Description</Col>
                              <Col xs="6">
                                Have many activities. 250+ Crowd. 2 days event.
                              </Col>
                            </Row>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                  </CardBody>
                </Card>
              </Col>
              <Col className="order-xl-1" xl="6">
                <Card className="bg-secondary shadow">
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
                            <label>Organization Contact Information</label>
                            <Row>
                              <Col>
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Email"
                                  type="text"
                                  name="oEmail"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.oEmail}
                                />
                                {formik.touched.oEmail &&
                                formik.errors.oEmail ? (
                                  <div style={{ color: "red" }}>
                                    {formik.errors.oEmail}
                                  </div>
                                ) : null}
                              </Col>
                              <Col>
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Contact Number"
                                  type="text"
                                  name="oContactNo"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.oContactNo}
                                />
                                {formik.touched.oContactNo &&
                                formik.errors.oContactNo ? (
                                  <div style={{ color: "red" }}>
                                    {formik.errors.oContactNo}
                                  </div>
                                ) : null}
                              </Col>
                            </Row>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label>Add Sponsorship Criteria</label>
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
                          <span>Packages</span>
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
                        <Col>
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
