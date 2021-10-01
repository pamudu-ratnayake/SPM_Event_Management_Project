import { React, useState } from "react";

// reactstrap components
import { Button, Modal } from "reactstrap";

function CommentModal() {
	const [showModal, setShowModal] = useState(false);

	//  Toggle Modal
	const toggleModal = (state) => {
		setShowModal(state);
	};

	return (
		<>
			{/* Button trigger modal */}
			<div onClick={() => toggleModal(true)}>
				<span className="heading">15</span>
				<span className="description">Comments </span>
			</div>
			{/* Modal */}
			<Modal
				className="modal-dialog-centered modal-Secondary"
				isOpen={showModal}
				toggle={() => toggleModal(false)}
			>
				{/* 	Rating & Comments */}
				<div className="modal-header mb--3 mt--2 mx--2">
					<h4 className="modal-title" id="showModalLabel">
						Rating & Comments
					</h4>
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
				<div className="card bg-secondary mx-2 mb-2">
					<div className="card-body-sm row ">
						<div className="col col-2 mx-2">
							<img
								width="75px"
								alt="..."
								className="rounded-circle pt-2"
								src={
									require("../../../assets/img/theme/team-4-800x800.jpg")
										.default
								}
							/>
						</div>
						<div className="col">
							<div className="row">
								<div className="d-flex justify-content-between pt-2">
									<h4 className="">Malith Madusankha</h4>
									{/* Button for Navigate to the relevent Event */}
									<Button size="sm" className=" px-2 me-3" color="primary">
										Event
									</Button>
								</div>
							</div>
							<div>
								<i class="bx bxs-star bx-tada"></i>
								<i class="bx bxs-star bx-tada"></i>
								<i class="bx bxs-star bx-tada"></i>
								<i class="bx bxs-star bx-tada"></i>
								<i class="bx bxs-star bx-tada"></i>
							</div>
							<div>
								<h4>You have done realy good job</h4>
							</div>
						</div>
						{/* </CardBody> */}
						{/* </Card> */}
					</div>
				</div>
			</Modal>
		</>
	);
}

export default CommentModal;
