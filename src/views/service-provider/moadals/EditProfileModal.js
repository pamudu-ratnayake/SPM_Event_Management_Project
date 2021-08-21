import { React, useState } from "react";

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
	Modal,
	Row,
	Col,
} from "reactstrap";
import { ListFormat } from "typescript";

// core components
import ReactDatetime from "react-datetime";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import FormikControl from "../FormikControl";
//import { moment } from "moment";
import DatePicker from "react-datepicker";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function EditProfileModal() {
	const [showModal, setShowModal] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const toggleModal = (state) => {
		console.log("toggleModal");
		setShowModal(state);
	};

	const initialValues = {
		// company Variavles
		company_Id: "SPC0005",
		company_name: "",
		service_provider_type: "",
		details: "",
		file: "",
	};

	const validationSchema = Yup.object({
		company_name: Yup.string().required("*Required!"),
		service_provider_type: Yup.string().required("*Required!"),
		details: Yup.string().required("*Required!"),
		file: Yup.string().required("*Required!"),
	});

	const onSubmit = (values) => {
		console.log("Form Date", values);
		//  values.date_of_the_event = event_date; //watch
		axios
			.post("http://localhost:8080/company/create", values)
			.then((res) => {
				console.log(res);
				console.log("Data", values);
				alert("Updated Successfully !!");
				window.location.reload(false);
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
			{/* Button trigger modal */}
			<Button
				color="info"
				type="button"
				href="#pablo"
				size="sm"
				onClick={() => toggleModal(true)}
			>
				Edit
			</Button>
			{/* Modal */}
			<Modal
				className="modal-dialog-centered modal-Secondary"
				isOpen={showModal}
				toggle={() => toggleModal(false)}
			>
				<div className="modal-header">
					<h5 className="modal-title" id="showModalLabel">
						Edit Details
					</h5>
					<button
						aria-label="Close"
						className="close"
						data-dismiss="modal"
						type="button"
						onClick={() => toggleModal(false)}
					>
						<span aria-hidden={true}>×</span>
					</button>
				</div>
				<div className="modal-body">
					{/*===========  form *================*/}
					<Form onSubmit={formik.handleSubmit}>
						<Row>
							<Col>
								<FormGroup>
									<label
										className="form-control-label"
										htmlFor="service_provider_type"
									>
										Service Provider Type
									</label>
									<Input
										className="form-control-alternative"
										defaultValue="SPS00001"
										id="service_provider_type"
										placeholder="SPS00001"
										type="text"
										name="service_provider_type"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.service_provider_type}
									/>
									{formik.touched.service_provider_type &&
									formik.errors.service_provider_type ? (
										<div style={{ color: "red" }}>
											{formik.errors.service_provider_type}
										</div>
									) : null}
								</FormGroup>
							</Col>
						</Row>

						<Row>
							<Col>
								<FormGroup>
									<label className="form-control-label" htmlFor="company_name">
										Company Name
									</label>
									<Input
										className="form-control-alternative"
										id="company_name"
										placeholder="jesse@example.com"
										type="text"
										name="company_name"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.company_name}
									/>
									{formik.touched.company_name && formik.errors.company_name ? (
										<div style={{ color: "red" }}>
											{formik.errors.company_name}
										</div>
									) : null}
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<FormGroup>
									<label className="form-control-label" htmlFor="details">
										Details
									</label>

									<Input
										className="form-control-alternative"
										placeholder="Write a large text here ..."
										rows="3"
										type="textarea"
										name="details"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.details}
									/>
									{formik.touched.details && formik.errors.details ? (
										<div style={{ color: "red" }}>{formik.errors.details}</div>
									) : null}
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<FormGroup>
									<Input
										class="btn border border-light w-100"
										type="file"
										name="file"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.file}
									/>
									{formik.touched.file && formik.errors.file ? (
										<div style={{ color: "red" }}>{formik.errors.file}</div>
									) : null}
								</FormGroup>
							</Col>
						</Row>
						{/* ========= Buttons =============== */}
						<div className="modal-footer">
							<Button
								color="secondary"
								data-dismiss="modal"
								type="button"
								onClick={() => toggleModal(false)}
							>
								Close
							</Button>
							<Button color="primary" type="submit">
								Save changes
							</Button>
						</div>
					</Form>
				</div>
			</Modal>
		</>
	);
}

export default EditProfileModal;
