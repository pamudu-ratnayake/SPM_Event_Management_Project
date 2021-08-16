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

function EditProfileModal() {
	const [showModal, setShowModal] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const toggleModal = (state) => {
		setShowModal(state);
	};

	const saveData = () => {
		// var file = selectedFile;
		// var content = fs.readFileSync(file, "utf8");
		console.log(" selectedFile : " + selectedFile);
	};

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
					<Form>
						<Row>
							<Col>
								<FormGroup>
									<label
										className="form-control-label"
										htmlFor="serviceProvideId"
									>
										Service Provider Type
									</label>
									<Input
										className="form-control-alternative"
										defaultValue="SPS00001"
										id="serviceProvideId"
										placeholder="SPS00001"
										type="text"
									/>
								</FormGroup>
							</Col>
						</Row>

						<Row>
							<Col>
								<FormGroup>
									<label className="form-control-label" htmlFor="nicNo">
										Company Name
									</label>
									<Input
										className="form-control-alternative"
										id="nicNo"
										placeholder="jesse@example.com"
										type="email"
									/>
								</FormGroup>
							</Col>
						</Row>

						<Row>
							<Col>
								<FormGroup>
									<label className="form-control-label" htmlFor="nicNo">
										Details
									</label>
									<Input
										className="form-control-alternative"
										placeholder="Write a large text here ..."
										rows="3"
										type="textarea"
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<FormGroup>
									<Input
										class="btn border border-light w-100"
										type="file"
										onChange={(e) => setSelectedFile(e.target.files[0])}
									/>
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
							<Button color="primary" type="button" onClick={saveData}>
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
