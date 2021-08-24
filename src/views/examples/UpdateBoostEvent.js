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
import * as Yup from "yup";
// core components
import BoostHeader from "components/Headers/BoostHeader";

import { useFormik } from "formik";

const UpdateBoostEvent = () => {
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    service_Provider_Name: "",
    service_Provider_ID: "",
    contact_Number_SP: "",
    email_SP: "",
    advertisement_Duration: "",
    advertisement_Des: "",
    advertisement_Pic: "",
  };

  const validationSchema = Yup.object({
    service_Provider_Name: Yup.string().required("Required"),
    contact_Number_SP: Yup.string().required("Required"),
    email_SP: Yup.string().required("Required"),
    service_Type: Yup.string().required("Required"),
    advertisement_Duration: Yup.string().required("Required"),
    advertisement_Des: Yup.string().required("Required"),
    advertisement_Pic: Yup.string().required("Required"),
    cardtype: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
  });
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
                    <h2 className="mb-0">Event Boosting Information</h2>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                  <Col md="6">
                      <FormGroup>
                        <label>Customer Name  </label>
                        <Input
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.Customer_Name}
                          id="Customer_Name "
                          name="Customer_Name"
                          placeholder="Enter your Name"
                           type="text"
                        />
                        {formik.touched.Customer_Name &&
                        formik.errors.Customer_Name? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Customer_Name}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>NIC Number </label>
                        <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nic_no}
                          id="NIC"
                          name="nic_no"
                          placeholder="Enter your NIC Number"
                          type="text"
                        />
                        {formik.touched.nic_no &&
                        formik.errors.nic_no? (
                          <div style={{ color: "red" }}>
                            {formik.errors.nic_no}
                          </div>
                        ) : null}
                      </FormGroup>
                       </Col>
                    </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Customer Email </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.email_SP}
                          id="Email_E"
                          name="email_E"
                          placeholder="Enter Your Email"
                          type="text"
                        />
                        {formik.touched.email_E &&
                         formik.errors.email_E ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.email_E}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number  </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.contact_Number_E}
                          id="Contact_Number_E"
                          name="contact_Number_E"
                          placeholder="Enter Your Contact Number"
                          type="text"
                        />
                        {formik.touched.contact_Number_E &&
                        formik.errors.contact_Number_E ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.contact_Number_E}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md="12">
                      <label>Boost Purpose </label>
                      <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.advertisement_Des}
                        id="Advertisement_Des"
                        name="advertisement_Des"
                        placeholder="Enter your Boost Description here ...................."
                        rows="6"
                        type="textarea"
                      />
                    </Col>
                  </Row>
                  <br></br>
                  
                  <Row>
                  <Col md="6">
                      <FormGroup>
                        <label>Service Type : </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.service_Type}
                          id="Service_Type"
                          name="service_Type"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>1 day - LKR. 500</option>
                          <option>3 day - LKR. 700</option>
                          <option>5 day - LKR. 1000</option>
                          <option>10 day - LKR. 1500</option>
                          <option>20 day - LKR. 2500</option>
                          <option>30 day - LKR. 3500</option>
                        </Input>
                        {formik.touched.service_Type &&
                        formik.errors.service_Type ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.service_Type}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lm"
                      >
                        Boost My Event
                      </Button>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lm"
                      >
                        Cancle
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdateBoostEvent;