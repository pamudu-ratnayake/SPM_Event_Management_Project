import React, { useState, useEffect } from "react";
import API from "variables/tokenURL";
// reactstrap components
import { Button, Modal } from "reactstrap";

function RatingModal() {
	const user = JSON.parse(localStorage.getItem("profile")).result;
	const [showModal, setShowModal] = useState(false);
	const [rates, setRates] = useState("");
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		API.get(`/serviceProvider/getByUser/${user._id}`)
			.then((res) => {
				let data = res.data;
				setReviews(data);
				let count = data.review_rate.length;
				setRates(count);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// Toggle Modal
	const toggleModal = (state) => {
		setShowModal(state);
	};

	return (
		<>
			{/* Button trigger modal */}
			<div onClick={() => toggleModal(true)}>
				<span className="heading">
					<i class="bx bxs-star bx-tada text-danger fs-2">{rates}</i>
				</span>
				<span className="description text-danger">Rating</span>
			</div>
			{/* Modal */}
			<Modal
				className="modal-dialog-centered modal-Secondary"
				isOpen={showModal}
				toggle={() => toggleModal(false)}
			>
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
				<div>
					{reviews && reviews.review_rate.map((review_rate) => (
						<div
							key={review_rate._id}
							className="card bg-secondary mx-2 mb-2 pt-2 ps-3"
						>
							<div className="card-body-sm row ">
								<div className="col-2">
									<i class="bx bxs-star bx-tada text-danger fs-2">
										{review_rate?.rate}
									</i>
								</div>
								<div className="col-10">
									<h4 className="text-warning">{review_rate?.review}</h4>
								</div>
							</div>
						</div>
					))}
				</div>
			</Modal>
		</>
	);
}

export default RatingModal;
