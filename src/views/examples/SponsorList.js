import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import UserHeaderRequestedSponsors from "components/Headers/UserHeaderRequestedSponsors.js";
import axios from "axios";
import { useState, useEffect, } from "react";
import {Link} from "react-router-dom";

const SponsorList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/sponsor/getSponsors")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteCustomer = (_id) => {
    axios.delete(`http://localhost:8080/sponsor/deleteSponsor/${_id}`)
        .then(res =>{
          console.log(res)
          // this.props.history.push({
          //   pathname: '/admin/signup'
          // })
        })
        .catch(error =>{
          console.log(error)
        })
  };

  return (
    <>
      <UserHeaderRequestedSponsors />
      {/* Page content */}
      <Container className="mt--4" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Requested Sponsors</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Company</th>
                    <th scope="col">Sponsor ID</th>
                    <th scope="col">Registration No</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tell</th>
                    <th scope="col">Sponsor Type</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                    {posts.map((posts) => (
                      <tr key={posts._id}>
                  
                        <td scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              {/* <img
                                alt="..."
                                src={
                                  require("../../assets/img/theme/bootstrap.jpg")
                                    .default
                                }
                              /> */}

                              <i/>
                            </a>
                            <Media>
                              <span className="mb-0 text-sm">
                                {posts.companyName}
                              </span>
                            </Media>
                          </Media>
                        </td>
                        <td>{posts._id}</td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            {/* <i className="bg-warning" /> */}
                            {posts.regNo}
                          </Badge>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">{posts.sponsorEmail}</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">{posts.SponsorPhoneNo}</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">{posts.sponsorType}</span>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                            <Link to ={`/admin/Update_Sponsor/${posts._id}`}>
                              <DropdownItem
                                // onClick={(e) => e.preventDefault()}
                                type="submit"
                              >
                                Edit Sponsor
                              </DropdownItem>
                              </Link>
                              <DropdownItem
                              
                                onClick={deleteCustomer.bind(props.this,posts._id)}
                              >
                                Remove
                              </DropdownItem>
                              {/* <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem> */}
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                  </tr>
                      
                    ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SponsorList;
