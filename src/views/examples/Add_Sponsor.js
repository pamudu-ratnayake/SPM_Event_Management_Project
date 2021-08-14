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
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { Formik, useFormik } from "formik";

const Add_Sponsor = () => {
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    sponsorID: "",
    companyName: "",
    sponsorType: "",
    SponsorPhoneNo: "",
    sponsorEmail: "",
  };
  const formik = useFormik({
    initialValues,
  });
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4"></Col>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Add Sponsor</h2>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Sponsor ID</label>
                        <Input
                          id="exampleFormControlInput1"
                          disabled
                          placeholder="Sponsor ID"
                          type="text"
                          name="sponsorID"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.sponsorID}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Company Name</label>
                        <Input
                          placeholder="Event ID"
                          type="text"
                          name="companyName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.companyName}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Sponsor Type</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="select"
                          name="sponsorType"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.sponsorType}
                        >
                          <option>Choose...</option>
                          <option>Bank</option>
                          <option>Institute</option>
                          <option>Clothing & accessories</option>
                          <option>Mobile telecommunications</option>
                          <option>Electronics</option>
                          <option>Food products</option>
                          <option>Exploration & production</option>
                          <option>Health care providers</option>
                          <option>Hotels</option>
                          <option>Software</option>
                          <option>Personal products</option>
                          <option>Insurance</option>
                          <option>Engineering</option>
                          <option>Travel & tourism</option>
                          <option>Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input
                          placeholder="Event ID"
                          type="text"
                          name="SponsorPhoneNo"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.SponsorPhoneNo}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          type="email"
                          name="sponsorEmail"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.sponsorEmail}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                      name=""
                    >
                      Add
                    </Button>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                      name=""
                    >
                      Cancle
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Add_Sponsor;
