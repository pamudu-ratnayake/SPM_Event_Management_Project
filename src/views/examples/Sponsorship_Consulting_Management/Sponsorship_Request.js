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

const Sponsorship_Request = () => {
  const [posts, setPosts] = useState([]);
  let history = useHistory();

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

  // const sendMail = () => {
  //   console.log(posts._id);
  //   history.push({
  //     pathname: "/admin/Send_Request/${posts._id}",
  //   });
  // };

  return (
    <>
      <UserHeaderSponsors />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Col className="order-xl-1" xl="12">
          <Card className="bg">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h2 className="mb-0">Sponsors</h2>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                {posts.map((posts) => (
                  <Col key={posts._id} xl="3">
                    <Link to={`/admin/Send_Request/${posts._id}`}>
                    <Card
                      // onClick={sendMail}
                      className="card-stats mb-4 mb-lg-3 secondary"
                      style={{ height: "20rem" }}
                    >
                      <CardImg
                        style={{ height: "120px" }}
                        alt="..."
                        src={
                          require("../../../assets/img/logo/logo4.jpg").default
                        }
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
