// reactstrap components
import { Container, Row, Col } from "reactstrap";

const DashboardHeader = () => {
	return (
		<>
			<div
				className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
				style={{
					minHeight: "450px",
					backgroundImage:
						"url(" +
						require("../../../assets/img/theme/dash.jpg").default +
						")",
					backgroundSize: "cover",
					backgroundPosition: "center top",
				}}
			>
				{/* Mask */}
				<span className="mask bg-gradient-default opacity-6" />
				{/* Header container */}
				<Container className="d-flex align-items-center" fluid></Container>
			</div>
		</>
	);
};

export default DashboardHeader;
