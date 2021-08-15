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
						<Form role="form">
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
										/>
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
										/>
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
										type="email"
										autoComplete="new-email"
									/>
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
										/>
									</FormGroup>
								</Col>
								<Col lg="6">
									<FormGroup>
										<label
											className="form-control-label"
											htmlFor="input-mobile"
										>
											NIC / PASSPORT
										</label>
										<Input
											className="form-control-alternative"
											defaultValue="0112699151"
											id="input-mobil"
											placeholder="0770599151"
											type="text"
										/>
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
										autoComplete="new-password"
									/>
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
										type="re-password"
										autoComplete="new-password"
									/>
								</InputGroup>
							</FormGroup>
							<div className="text-muted font-italic">
								<small>
									password strength:{" "}
									<span className="text-success font-weight-700">strong</span>
								</small>
							</div>
							<div className="text-center">
								<Button className="mt-4" color="primary" type="button">
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
