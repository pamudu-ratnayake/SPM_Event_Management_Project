import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
// import decode from "jwt-decode"

// reactstrap components
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	FormGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	InputGroup,
	Navbar,
	Nav,
	Container,
	Media,
} from "reactstrap";
import API from "variables/tokenURL";

const AdminNavbar = (props) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const [customer, setCustomer] = useState("");

	const history = useHistory();
	const location = useLocation();

	const logout = () => {
		history.push("/auth");
		localStorage.clear();
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		if (token) {
			// const decodedToken = decode(token);
			// if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, []);

	useEffect(() => {
		API.get(`/customerdetails/getOneCustomer/${user?.result?._id}`)
			.then((res) => {
				console.log(res);
				setCustomer(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	useEffect(() => {
		API.get(`/serviceProvider/getByUser/${user?.result?._id}`)
			.then((res) => {
				console.log(res);
				setCustomer(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<>
			<Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
				<Container fluid>
					<Link
						className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
						to="/"
					>
						{props.brandText}
					</Link>
					<Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
						<FormGroup className="mb-0">
							<InputGroup className="input-group-alternative">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>
										<i className="fas fa-search" />
									</InputGroupText>
								</InputGroupAddon>
								<Input placeholder="Search" type="text" />
							</InputGroup>
						</FormGroup>
					</Form>
					<Nav className="align-items-center d-none d-md-flex" navbar>
						<UncontrolledDropdown nav>
							<DropdownToggle className="pr-0" nav>
								<Media className="align-items-center">
									<span className="avatar avatar-sm rounded-circle">
										<img alt="..." src={customer?.prof_img} />
									</span>
									<Media className="ml-2 d-none d-lg-block">
										<span className="mb-0 text-sm font-weight-bold">
											{user?.result.firstName}
										</span>
									</Media>
								</Media>
							</DropdownToggle>
							<DropdownMenu className="dropdown-menu-arrow" right>
								<DropdownItem className="noti-title" header tag="div">
									<h6 className="text-overflow m-0">Welcome!</h6>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-single-02" />
									<span>My profile</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-settings-gear-65" />
									<span>Settings</span>
								</DropdownItem>

								<DropdownItem divider />
								<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
									<i className="ni ni-user-run" />
									<span
										onClick={() => {
											logout();
										}}
									>
										Logout
									</span>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default AdminNavbar;
