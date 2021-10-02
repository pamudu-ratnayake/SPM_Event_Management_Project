// Sponsorship_Request

// reactstrap components
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
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap";
// core components
import UserHeaderSponsors from "components/Headers/UserHeaderSponsors.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import API from "variables/tokenURL";

const Sponsorship_Request = () => {
  const [posts, setPosts] = useState([]);
  const [searchStr, setSearch] = useState("");
  let history = useHistory();

  useEffect(() => {
    API
      .get("/sponsor/getSponsors")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(posts.sponsorLogo);

  return (
    <>
      <UserHeaderSponsors />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Col className="order-xl-1" xl="12">
          <Card className="bg-secondary shadow pl-1 pr-1">
            <CardHeader className="bg-white border-0 ">
              <Row className="align-items-center">
                <Col xs="7">
                  <h2 className="mb-0">Sponsors</h2>
                </Col>
                <Col xs="4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Search by Type..."
                      style={{
                        borderWidth: "2.5px",
                        width: "20rem",
                        height: "2rem",
                        textAlign: "left",
                        borderRadius: "15px",
                      }}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                {posts
                  .filter((r) => {
                    if (searchStr === "") {
                      return r;
                    } else if (
                      r.sponsorType
                        .toLowerCase()
                        .includes(searchStr.toLowerCase())
                    ) {
                      return r;
                    }
                  })
                  .map((posts) => (
                    <Col key={posts._id} xl="3">
                      <Link to={`/customer/Send_Request/${posts._id}`}>
                        <Card
                          // onClick={sendMail}
                          className="card-stats mb-4 mb-lg-3 secondary"
                          style={{ height: "20rem" }}
                        >
                          <CardImg
                            style={{ height: "120px" }}
                            alt="..."
                            src={posts && posts.sponsorLogo}
                            top
                          />
                          <CardBody>
                            {/* <div className="col"> */}
                            <CardTitle
                              className="h2 font-weight-bold text-danger mb-0"
                              style={{ fontSize: "1.1rem" }}
                            >
                              {posts.companyName}
                            </CardTitle>
                            <CardText className="text-default mr-0 mb-1">
                              <small>{posts.sponsorType}</small>
                            </CardText>
                            <CardText
                              className="font-weight text-success mr-0 mb-1"
                              style={{ fontSize: "0.8rem" }}
                            >
                              <strong>{posts.sponsorEmail}</strong>
                            </CardText>
                            <CardText
                              className="font-weight text-success mr-0 mb-1"
                              style={{ fontSize: "0.9rem" }}
                            >
                              <strong>{posts.SponsorPhoneNo}</strong>
                            </CardText>
                            <CardText
                              className="font-weight text-default mr-0 mb-1"
                              style={{ fontSize: "0.8rem" }}
                            >
                              <strong>{posts.sponsorAddress}</strong>
                            </CardText>
                            {/* </div> */}
                          </CardBody>
                        </Card>
                      </Link>
                    </Col>
                  ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default Sponsorship_Request;
