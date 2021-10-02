import { useFormik } from "formik";
import axios from "axios";
import { useHistory } from "react-router";
import * as Yup from "yup";

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col } from "reactstrap";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conPassword: "",
    user_type: "customer",
  };

  //  Validation Schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("*Required!"),
    lastName: Yup.string().required("*Required!"),
    email: Yup.string().email("*Invalid email!").required("*Required!"),
    password: Yup.string().required("*Required!"),
    conPassword: Yup.string().required("*Required!"),
  });

  let history = useHistory();

  const onSubmit = (values) => {
    if (values.password === values.conPassword) {
      console.log("Form Date", values);
      axios
        .post("http://localhost:8080/auth-user/signup", values)
        .then((res) => {
          console.log(res);
          console.log("Data", values);
          localStorage.setItem("profile", JSON.stringify(res.data));
          history.push({
            pathname: `/customer`,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Password mismatching! Re-Enter Passwords");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <small>Sign up with</small>
            </div>
            <div className="text-center">
              <Button className="btn-neutral btn-icon mr-4" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
                <span className="btn-inner--icon">
                  <img alt="..." src={require("../../assets/img/icons/common/facebook2.svg").default} />
                </span>
                <span className="btn-inner--text">Facebook</span>
              </Button>
              <Button className="btn-neutral btn-icon" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
                <span className="btn-inner--icon">
                  <img alt="..." src={require("../../assets/img/icons/common/google.svg").default} />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="firstName" placeholder="First Name" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                    </InputGroup>
                      {formik.touched.firstName && formik.errors.firstName ? <div style={{ color: "red" }}>{formik.errors.firstName}</div> : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="lastName" placeholder="Last Name" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                    </InputGroup>
                      {formik.touched.lastName && formik.errors.lastName ? <div style={{ color: "red" }}>{formik.errors.lastName}</div> : null}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input name="email" placeholder="Email" type="email" autoComplete="new-email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </InputGroup>
                  {formik.touched.email && formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input name="password" placeholder="Password" type="password" autoComplete="new-password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                </InputGroup>
                  {formik.touched.password && formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="conPassword"
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.conPassword}
                  />
                </InputGroup>
                  {formik.touched.conPassword && formik.errors.conPassword ? <div style={{ color: "red" }}>{formik.errors.conPassword}</div> : null}
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  password strength: <span className="text-success font-weight-700">strong</span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
                    <label className="custom-control-label" htmlFor="customCheckRegister">
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
