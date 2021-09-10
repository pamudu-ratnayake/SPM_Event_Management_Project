import ReactDatetime from "react-datetime";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import FormikControl from "./FormikControl";
//import { moment } from "moment";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";

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

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const RegisterServiceProvider = () => {
	const initialValues = {
		servic_provider_Id: "SPS00006",
		nic_no: "",
		first_name: "",
		last_name: "",
		email: "",
		mobile: "",
		password: "",
		re_password: "",
	};

	const validationSchema = Yup.object({
		servic_provider_Id: Yup.string(),
		nic_no: Yup.string().required("*Required!"),
		first_name: Yup.string().required("*Required!"),
		last_name: Yup.string().required("*Required!"),
		email: Yup.string().email("*Invalid email!").required("*Required!"),
		mobile: Yup.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.required("*Required!")
			.min(10, "Too short")
			.max(10, "Too long"),
		password: Yup.string().required("*Required!"),
		re_password: Yup.string().required("*Required!"),
	});

	const onSubmit = (values) => {
		console.log("Form Date", values);
		//  values.date_of_the_event = event_date; //watch
		axios
			.post(`http://localhost:8080/serviceProvider/create`, values)
			.then((res) => {
				console.log(res);
				console.log("Data", values);
				alert("Registered Successfully !!");
				window.location = "/admin/service-provider-profile";
			})
			.catch((error) => {
				console.log(error);
			});
	};

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
											name="first_name"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.first_name}
										/>
										{formik.touched.first_name && formik.errors.first_name ? (
											<div style={{ color: "red" }}>
												{formik.errors.first_name}
											</div>
										) : null}
									</FormGroup>
								</Col>
								<Col lg="6">
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
											name="last_name"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.last_name}
										/>
										{formik.touched.last_name && formik.errors.last_name ? (
											<div style={{ color: "red" }}>
												{formik.errors.last_name}
											</div>
										) : null}
									</FormGroup>
								</Col>
							</Row>

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

							<Row>
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
							</Row>

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
										name="re_password"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.re_password}
									/>
									{formik.touched.re_password && formik.errors.re_password ? (
										<div style={{ color: "red" }}>
											{formik.errors.re_password}
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
