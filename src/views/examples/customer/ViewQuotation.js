import ReactDatetime from "react-datetime";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import API from "variables/tokenURL";
import jsPDF from "jspdf";
import 'jspdf-autotable'

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, InputGroupAddon, InputGroupText, InputGroup, Modal, Table } from "reactstrap";
// core components
import ViewEventHeader from "components/Headers/ViewEventHeader";
import { useEffect, useMemo, useState } from "react";

const ViewQuotation = (props) => {
  console.log("ID is : ", props.match.params._id);

  const [quotation, setQuotation] = useState([]);
  const [event, setEvent] = useState(0);
  const [provider, setprovider] = useState(0);

  const [defaultModal, setState] = useState(false);
  const [notificationModal, setModal] = useState(false);

  //toggle function
  function toggleModal() {
    setState(!defaultModal);
  }

  function toggleModalNotification() {
    setModal(!notificationModal);
  }

  // function onStarClick(nextValue, prevValue, name) {
  //   setRating({ rating: nextValue });
  // }

  // console.log("rating", quotation.provider_id);

  const initialValues = {};

  // -------useEffect------------
  useEffect(() => {
    API.get(`/quotation/get/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setQuotation(res.data);

    API
      .get(`/eventAdd/getOneEvent/${res.data.event_id}`)
      .then((res) => {
        console.log(res);
        setEvent(res.data);
      })
      })
      .catch((error) => {
        console.log(error);
      });
 
  }, []);


  // console.log("aa", provider.user_name);
  console.log("llqq", quotation.quotation_details);

  const formik = useFormik({
    initialValues,
  });


  //-------------JSPDF report create----------------

  const downloadPDF = () =>{
    const doc = new jsPDF('portrait', 'px', 'a4', false);

    doc.setFont('Helvertica', 'bold')
    doc.setTextColor("red");
    doc.setFontSize(24)
    doc.text(140, 60, 'Quotation Information')
    doc.setFont('Helvertica', 'bold')
    doc.setTextColor("black");
    doc.setFontSize(16)
    doc.text(40, 140, 'Event Name')
    doc.text(40, 180, 'Service Provider Name')
    doc.text(40, 220, 'Service Type')
    doc.text(40, 260, 'Service Provider Email')
    doc.text(40, 300, 'Service Provider Tel')
    doc.text(40, 340, 'Valid')
    doc.text(40, 380, 'Terms')
    // doc.text(40, 210, 'Organizer Name')
    // doc.text(40, 230, 'Organizer Email')
    // doc.text(40, 250, 'Organizer Contact No')
    // doc.text(40, 270, 'Event Discription')

    doc.setFont("Helvertica", "Normal");
    doc.setFontSize(16)
    doc.text(170, 140, ":");
    doc.text(170, 180, ":");
    doc.text(170, 220, ":");
    doc.text(170, 260, ":");
    doc.text(170, 300, ":");
    doc.text(170, 340, ":");
    doc.text(170, 380, ":");

    doc.setFont("Helvertica", "Normal");
    doc.text(180, 140, event.event_name);
    doc.text(180, 180, quotation.provider_id.user_name);
    doc.text(180, 220, quotation.provider_id.service_type);
    doc.text(180, 260, quotation.provider_id.email);
    //doc.text(180, 300, quotation.provider_id.mobile);
    doc.text(180, 300, quotation.date_from);
    // doc.text(200, 200, 'to');
    // doc.text(220, 200, quotation.date_to);



    doc.save('test.pdf')
  }



  return (
    <>
      <ViewEventHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="7">
                    <h1 className="mb-0">Quotation Details</h1>
                  </Col>
                  <Col className="text-right" xs="5">              
                      <Button color="primary" size="sm" onClick={()=> {downloadPDF()}}>
                        Download
                      </Button>          
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Name : {event.event_name} </label>
                        <label className="ml-3">  </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Provider Name : {quotation.event_id && quotation.provider_id.user_name} </label>
                        <label className="ml-3"> </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Type : {quotation.event_id && quotation.provider_id.service_type} </label>
                        <label className="ml-3"> </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Provider's Email : {quotation.event_id && quotation.provider_id.email}</label>
                        <label className="ml-3"></label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Provider Contact Number : {quotation.event_id && quotation.provider_id.mobile}</label>
                        <label className="ml-3"> </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>
                          Valid :{""} {quotation.date_from} {""} to {""} {quotation.date_to}
                        </label>
                        <label className="ml-3"> </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Terms : {quotation.terms} </label>
                        <label className="ml-3"> </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label className="mb-2">Quotation Items : </label>
                    </Col>
                  </Row>
                  <Row style={{marginLeft:20, marginTop:10}}>
                    <Col md="8">
                      <Table className="align-items-center" responsive>
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">Item Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {quotation.quotation_details && quotation.quotation_details.map((quotation_details) => (
                            <tr key={quotation_details._id}>
                              <td>{quotation_details.item_name} </td>
                              <td>{quotation_details.quantity} </td>
                              <td>{"Rs. "} {quotation_details.unit_price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewQuotation;
