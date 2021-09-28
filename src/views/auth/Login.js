import { useFormik } from "formik";
import axios from "axios";
// reactstrap components
import { useHistory } from "react-router";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col } from "reactstrap";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  let history = useHistory();

  const onSubmit = (values) => {
    axios
      .post("http://localhost:8080/auth-user/login", values)
      .then((res) => {
        console.log(res);

        localStorage.setItem("profile", JSON.stringify(res.data));
        const user = JSON.parse(localStorage.getItem("profile"));
        console.log(user?.result?.user_type)
        if(user?.result?.user_type === "customer"){
        history.push({
          pathname: `/customer`,
        });
      }
      if(user?.result?.user_type === "service provider"){
        history.push({
          pathname: `/admin`,
        });
      }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button className="btn-neutral btn-icon" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
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
              <small>Or sign in with credentials</small>
            </div>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Email" type="email" name="email" autoComplete="new-email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                <label className="custom-control-label" htmlFor=" customCheckLogin">
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
