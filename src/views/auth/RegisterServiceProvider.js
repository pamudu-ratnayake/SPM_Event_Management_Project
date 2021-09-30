import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";
import { Alert } from "reactstrap";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Row,
	Col,
} from "reactstrap";

const RegisterServiceProvider = () => {
	// Initial Values
	const initialValues = {
		// nic_no: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		conPassword: "",
		service_type: "",
		user_type: "service provider",
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

  //  Submit Method
  const onSubmit = (values) => {
    console.log("Form Date", values);
    if (values.password === values.conPassword){
    axios
      .post("http://localhost:8080/auth-user/signup", values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
        localStorage.setItem("profile", JSON.stringify(res.data));
        history.push({
          pathname: `/admin`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else {    
      alert("Password mismatching! Re-Enter Passwords")
    }
  };

	// Formik Options
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<>
			<Col lg="6" md="8">
				<Card className="bg-secondary shadow border-0">
					<CardHeader className="bg-transparent">
						<div className="text-muted text-center mt-2 mb-2">
							<large>Registration</large>
						</div>
					</CardHeader>
					<CardBody className="px-lg-5 py-lg-5">
						<Form onSubmit={formik.handleSubmit}>
							<Row>
								<Col lg="6">
									<FormGroup>
										<label
											className="form-control-label"
											htmlFor="input-first-name"
										>
											First name
										</label>
										<Input
											className="form-control-alternative"
											defaultValue="Lucky"
											id="input-first-name"
											placeholder="First name"
											type="text"
											name="firstName"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.firstName}
										/>
										{formik.touched.firstName && formik.errors.firstName ? (
											<div style={{ color: "red" }}>
												{formik.errors.firstName}
											</div>
										) : null}
									</FormGroup>
								</Col>
								<Col lg="6">
									{/* Last Name */}
									<FormGroup>
										<label
											className="form-control-label"
											htmlFor="input-last-name"
										>
											Last name
										</label>
										<Input
											className="form-control-alternative"
											defaultValue="Jesse"
											id="input-last-name"
											placeholder="Last name"
											type="text"
											name="lastName"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.lastName}
										/>
										{formik.touched.lastName && formik.errors.lastName ? (
											<div style={{ color: "red" }}>
												{formik.errors.lastName}
											</div>
										) : null}
									</FormGroup>
								</Col>
							</Row>

							<FormGroup>
								<label>Service Type</label>
								<Input
									className="form-control-alternative"
									id="exampleFormControlInput1"
									placeholder="Enter Location"
									type="select"
									name="service_type"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.service_type}
								>
									<option>Choose...</option>
									<option>Photography</option>
									<option>Sound Provider</option>
									<option>Florist</option>
									<option>Catering</option>
									<option>Cake Designer</option>
									<option>Costume Designer</option>
									<option>Event Planner</option>
									<option>Decorators</option>
									<option>Dancers</option>
								</Input>
								{formik.touched.service_type && formik.errors.service_type ? (
									<div style={{ color: "red" }}>
										{formik.errors.service_type}
									</div>
								) : null}
							</FormGroup>

							{/* Email */}
							<FormGroup>
								<label className="form-control-label" htmlFor="input-email">
									Email
								</label>
								<InputGroup className="input-group-alternative mb-3">
									<InputGroupAddon addonType="prepend">
										<InputGroupText>
											<i className="ni ni-email-83" />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder="Email"
										type="text"
										name="email"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.email}
									/>
									{formik.touched.email && formik.errors.email ? (
										<div style={{ color: "red" }}>{formik.errors.email}</div>
									) : null}
								</InputGroup>
							</FormGroup>

							{/* <Row>
								<Col lg="6">
									<FormGroup>
										<label
											className="form-control-label"
											htmlFor="input-telepohon"
										>
											Mobile
										</label>
										<Input
											className="form-control-alternative"
											defaultValue="0112699151"
											id="input-telepohone"
											placeholder="0112699151"
											type="text"
											name="mobile"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.mobile}
										/>
										{formik.touched.mobile && formik.errors.mobile ? (
											<div style={{ color: "red" }}>{formik.errors.mobile}</div>
										) : null}
									</FormGroup>
								</Col>
								<Col lg="6">
									<FormGroup>
										<label
											className="form-control-label"
											htmlFor="input-mobile"
										>
											NIC
										</label>
										<Input
											className="form-control-alternative"
											defaultValue="0112699151"
											id="input-mobil"
											placeholder="0770599151"
											type="text"
											name="nic_no"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.nic_no}
										/>
										{formik.touched.nic_no && formik.errors.nic_no ? (
											<div style={{ color: "red" }}>{formik.errors.nic_no}</div>
										) : null}
									</FormGroup>
								</Col>
							</Row> */}
							{/* Password */}
							<FormGroup>
								<label className="form-control-label" htmlFor="input-password">
									Password
								</label>
								<InputGroup className="input-group-alternative">
									<InputGroupAddon addonType="prepend">
										<InputGroupText>
											<i className="ni ni-lock-circle-open" />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder="Password"
										type="password"
										name="password"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.password}
									/>
									{formik.touched.password && formik.errors.password ? (
										<div style={{ color: "red" }}>{formik.errors.password}</div>
									) : null}
								</InputGroup>
							</FormGroup>

							<FormGroup>
								<label
									className="form-control-label"
									htmlFor="input-re-password"
								>
									Re-Password
								</label>
								<InputGroup className="input-group-alternative">
									<InputGroupAddon addonType="prepend">
										<InputGroupText>
											<i className="ni ni-lock-circle-open" />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder="Re-Password"
										type="password"
										name="conPassword"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.conPassword}
									/>
									{formik.touched.conPassword && formik.errors.conPassword ? (
										<div style={{ color: "red" }}>
											{formik.errors.conPassword}
										</div>
									) : null}
								</InputGroup>
							</FormGroup>
							<div className="text-muted font-italic">
								<small>
									password strength:{" "}
									<span className="text-success font-weight-700">strong</span>
								</small>
							</div>
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

export default RegisterServiceProvider;
