import React, { useState, useEffect, useMemo } from "react";
import API from "variables/tokenURL";
import { useDropzone } from "react-dropzone";
// Modals
import EditProfileModal from "./moadals/EditProfileModal";
import RatingModal from "./moadals/RatingModal";
// Form Element
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
} from "reactstrap";
// core components
import ServiceProviderHeader from "components/Headers/service-provider-header/ServiceProviderHeader";
import CommentModal from "./moadals/CommentModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ServiceProviderProfile = (props) => {
	const [provider, setProvider] = useState("");
	const [posts, setPosts] = useState("");
	// const [profile, setProfile] = useState("");

	// Taking Current User
	const user = JSON.parse(localStorage.getItem("profile")).result;

	const baseStyle = {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "10px",
		borderWidth: 2,
		borderRadius: 10,
		borderColor: "#eeeeee",
		borderStyle: "dashed",
		backgroundColor: "#bab8b8",
		color: "#bdbdbd",
		outline: "none",
		transition: "border .24s ease-in-out",
	};
	const activeStyle = {
		borderColor: "#2196f3",
	};
	const acceptStyle = {
		borderColor: "#00e676",
	};
	const rejectStyle = {
		borderColor: "#ff1744",
	};

	const [files, setFiles] = useState([]);

	const {
		acceptedFiles,
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
		open,
	} = useDropzone({
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept]
	);

	const filepath = acceptedFiles.map((file) => (
		<li key={file.name}>
			{file.name} - {file.size} bytes
		</li>
	));

	useEffect(() => {
		API.get(`/serviceProvider/getByUser/${user._id}`)
			.then((res) => {
				let data = res.data;
				setProvider(data);

				API.get(`/company/get/${data.company_id}`).then((res) => {
					setPosts(res.data);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const deleteCompany = () => {
		if (window.confirm("Are you sure you wish to delete this item?")) {
			API.delete(`/company/delete/${posts._id}`)
				.then((res) => {
					alert(posts.company_name + " has Deleted !");
					window.location.reload(false);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const initialValues = {
		servic_provider_Id: provider.servic_provider_Id,
		nic_no: provider.nic_no ? provider.nic_no : "",
		first_name: provider.first_name,
		last_name: provider.last_name,
		user_name: provider.user_name,
		email: provider.email,
		mobile: provider.mobile ? provider.mobile : "",
		telephone: provider.telephone ? provider.telephone : "",
		address: provider.address,
		company_id: provider.company_id,
	};

	const validationSchema = Yup.object({
		servic_provider_Id: Yup.string(),
		nic_no: Yup.string().required("*Required!"),
		user_name: Yup.string().required("*Required!"),
		first_name: Yup.string().required("*Required!"),
		last_name: Yup.string().required("*Required!"),
		email: Yup.string().email("*Invalid email!").required("*Required!"),
		mobile: Yup.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.required("*Required!")
			.min(10, "Too short")
			.max(10, "Too long"),
		telephone: Yup.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.required("*Required!")
			.min(10, "Too short")
			.max(10, "Too long"),
		address: Yup.string().required("*Required!"),
	});

	const onSubmit = (values) => {
		values.servic_provider_Id = provider.servic_provider_Id;
		values.user_id = provider.user_id;
		values.company_id = provider.company_id;

		let nic_no = values.nic_no;
		// NIC Number Validation
		var cnic_no_regex = new RegExp("^[0-9+]{9}[vV|xX]$");
		var new_cnic_no_regex = new RegExp("^[0-9+]{12}$");

		if (nic_no.length == 10 && cnic_no_regex.test(nic_no)) {
			console.log("Valid NIC");
		} else if (nic_no.length == 12 && new_cnic_no_regex.test(nic_no)) {
			console.log("Valid NIC");
		} else {
			alert("Invalid NIC No");
			return null;
		}

		let formdata = new FormData();
		formdata.append("servic_provider_Id", provider.servic_provider_Id);
		formdata.append("user_id", provider.user_id);
		formdata.append("company_id", provider.company_id);
		formdata.append("nic_no", values.nic_no);
		formdata.append("first_name", values.first_name);
		formdata.append("last_name", values.last_name);
		formdata.append("user_name", values.user_name);
		formdata.append("email", values.email);
		formdata.append("mobile", values.mobile);
		formdata.append("telephone", values.telephone);
		formdata.append("address", values.address);
		formdata.append("file", acceptedFiles[0]);

		API.put(`/serviceProvider/update/${provider._id}`, formdata)
			.then((res) => {
				alert("Updated Successfully !!");
				disableInputs();
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

	function disableInputs() {
		document.getElementById("input-nic-no").disabled = true;
		document.getElementById("input-username").disabled = true;
		document.getElementById("input-first-name").disabled = true;
		document.getElementById("input-last-name").disabled = true;
		document.getElementById("input-email").disabled = true;
		document.getElementById("input-telephone").disabled = true;
		document.getElementById("input-mobile").disabled = true;
		document.getElementById("input-address").disabled = true;
		document.getElementById("btn-save").style.display = "none";
	}

	return (
		<>
			<ServiceProviderHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
						<Card className="card-profile shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-profile-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="rounded-circle"
												src={provider?.prof_img}
											/>
										</a>
									</div>
								</Col>
							</Row>
							<CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
								<div className="d-flex justify-content-between">
									<EditProfileModal company={posts} />

									<Button
										className="float-right"
										color="danger"
										href="#pablo"
										onClick={deleteCompany}
										size="sm"
									>
										Delete
									</Button>
								</div>
							</CardHeader>
							<CardBody className="pt-0 pt-md-4">
								<Row>
									<div className="col">
										<div className="card-profile-stats d-flex justify-content-center mt-md-5">
											{/* Rating Modal */}
											<RatingModal />
											<div>
												<span className="heading">
													<i class="bx bx-task text-green fs-2 ">4</i>
												</span>
												<span className="description text-green">
													Completed
												</span>
											</div>
											{/* Comment Modal */}
											<CommentModal />
										</div>
									</div>
								</Row>
								<div className="text-center">
									<h3>
										{provider.user_name}
										<span className="font-weight-light"></span>
									</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										{provider.address}
									</div>
									<div className="h5 mt-4">
										<i className="ni business_briefcase-24 mr-2" />

										{posts.service_provider_type}
									</div>
									<div>
										<i className="ni education_hat mr-2" />
										{posts.company_name}{" "}
										{posts.company_name ? " (pvt) Ltd" : ""}
									</div>
									<hr className="my-4" />
									<p>{posts.details}</p>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										Show more
									</a>
								</div>
							</CardBody>
						</Card>
						<div className="m-2" {...getRootProps({ style })}>
							<input {...getInputProps()} />
							{/* <FileBase><input {...getInputProps()} /></FileBase> */}
							<p>
								Drag 'n' drop your image file here, or click to select files
							</p>
						</div>

						<h4>File Details : {filepath}</h4>
					</Col>
					<Col className="order-xl-1" xl="8">
						<Card className="bg-secondary shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<Col xs="8">
										<h3 className="mb-0">My account</h3>
									</Col>
									<Col className="text-right" xs="4">
										<Button
											color="primary"
											href="#pablo"
											onClick={(e) => {
												document.getElementById(
													"input-nic-no"
												).disabled = false;
												document.getElementById(
													"input-username"
												).disabled = false;
												document.getElementById(
													"input-first-name"
												).disabled = false;
												document.getElementById(
													"input-last-name"
												).disabled = false;
												document.getElementById("input-email").disabled = false;
												document.getElementById(
													"input-telephone"
												).disabled = false;
												document.getElementById(
													"input-mobile"
												).disabled = false;
												document.getElementById(
													"input-address"
												).disabled = false;
												document.getElementById("btn-save").style.display =
													"block";
											}}
											size="sm"
										>
											Edit
										</Button>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Form onSubmit={formik.handleSubmit}>
									<h6 className="heading-small text-muted mb-4">
										User information
									</h6>
									<div className="pl-lg-4">
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-service-provider"
													>
														Service Provider ID
													</label>
													<Input
														className="form-control-alternative bg-secondary text-black"
														id="input-service-provider"
														placeholder="SPS00001"
														disabled
														type="text"
														name="servic_provider_Id"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={provider.servic_provider_Id}
													>
														{provider.servic_provider_Id}
													</Input>
													{formik.touched.servic_provider_Id &&
													formik.errors.servic_provider_Id ? (
														<div style={{ color: "red" }}>
															{formik.errors.servic_provider_Id}
														</div>
													) : null}
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-nic-no"
													>
														NIC NO
													</label>
													<Input
														className="form-control-alternative"
														id="input-nic-no"
														placeholder="jesse@example.com"
														type="text"
														name="nic_no"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={provider.nic_no}
													>
														{provider.nic_no}
													</Input>
													{formik.touched.nic_no && formik.errors.nic_no ? (
														<div style={{ color: "red" }}>
															{formik.errors.nic_no}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>

										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-username"
													>
														Username
													</label>
													<Input
														className="form-control-alternative"
														id="input-username"
														placeholder="Username"
														type="text"
														name="user_name"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={provider.user_name}
													></Input>
													{formik.touched.user_name &&
													formik.errors.user_name ? (
														<div style={{ color: "red" }}>
															{formik.errors.user_name}
														</div>
													) : null}
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-email"
													>
														Email address
													</label>
													<Input
														className="form-control-alternative"
														id="input-email"
														placeholder="Enter email address"
														type="text"
														name="email"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={provider.email}
													>
														{provider.email}
													</Input>
													{formik.touched.email && formik.errors.email ? (
														<div style={{ color: "red" }}>
															{formik.errors.email}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>
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
														id="input-first-name"
														placeholder="First name"
														type="text"
														name="first_name"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={provider.first_name}
													>
														{provider.first_name}
													</Input>
													{formik.touched.first_name &&
													formik.errors.first_name ? (
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
														id="input-last-name"
														placeholder="Last name"
														type="text"
														name="last_name"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={provider.last_name}
													>
														{provider.last_name}
													</Input>
													{formik.touched.last_name &&
													formik.errors.last_name ? (
														<div style={{ color: "red" }}>
															{formik.errors.last_name}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className="my-4" />
									<h6 className="heading-small text-muted mb-4">
										Contact information
									</h6>
									<div className="pl-lg-4">
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-telepohon"
													>
														Telephone
													</label>
													<Input
														className="form-control-alternative"
														id="input-telephone"
														placeholder="0112699151"
														type="text"
														name="telephone"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={provider.telephone}
													>
														{provider.telephone}
													</Input>
													{formik.touched.telephone &&
													formik.errors.telephone ? (
														<div style={{ color: "red" }}>
															{formik.errors.telephone}
														</div>
													) : null}
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-mobile"
													>
														Mobile
													</label>
													<Input
														className="form-control-alternative"
														id="input-mobile"
														placeholder="0770599151"
														type="text"
														name="mobile"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={provider.mobile}
													>
														{provider.mobile}
													</Input>
													{formik.touched.mobile && formik.errors.mobile ? (
														<div style={{ color: "red" }}>
															{formik.errors.mobile}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>

										<Row>
											<Col md="12">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-address"
													>
														Address
													</label>
													<Input
														className="form-control-alternative"
														id="input-address"
														placeholder="Home Address"
														type="text"
														name="address"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={provider.address}
													></Input>
													{formik.touched.address && formik.errors.address ? (
														<div style={{ color: "red" }}>
															{formik.errors.address}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>
									</div>
									<Button
										id="btn-save"
										className="float-right"
										color="success"
										type="submit"
									>
										Save
									</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ServiceProviderProfile;
