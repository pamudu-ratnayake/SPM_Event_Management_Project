import ReactDatetime from "react-datetime";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import API from "variables/tokenURL";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../../assets/img/theme/thebliss5.png";

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
  // const [items, setItems] = useState(0);

  const [defaultModal, setState] = useState(false);
  const [notificationModal, setModal] = useState(false);

  //toggle function
  function toggleModal() {
    setState(!defaultModal);
  }

  function toggleModalNotification() {
    setModal(!notificationModal);
  }

  const initialValues = {};

  // -------useEffect------------
  useEffect(() => {
    API.get(`/quotation/get/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setQuotation(res.data);

        API.get(`/eventAdd/getOneEvent/${res.data.event_id}`).then((res) => {
          console.log(res);
          setEvent(res.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("llqq", quotation.quotation_details);

  const formik = useFormik({
    initialValues,
  });

  const year = new Date().getFullYear().toString();

  // var items = [ quotation.quotation_details ]

  const columns = [
    { title: "Item Name", dataKey: "item_name" },
    { title: "Quantity", dataKey: "quantity" },
    { title: "Unit Price", dataKey: "unit_price" },
  ];

  var rows = quotation.quotation_details?.map((quotation_details) => ({
    item_name: quotation_details?.item_name,
    quantity: quotation_details?.quantity,
    unit_price: "Rs." +" " + quotation_details?.unit_price,
  }));

  //-------------JSPDF report create----------------

  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "px", "a4", false);

    doc.addImage(logo, "PNG", 40, 10, 50, 50);
    doc.setFont("Helvertica", "bold");
    doc.setTextColor(100);
    doc.text(100, 40, "THE BLISS");
    doc.setLineWidth(1.5);
    doc.line(50, 65, 420, 65);

    doc.setFont("Helvertica", "bold");
    doc.setTextColor("red");
    doc.setFontSize(20);
    doc.text(150, 90, "Quotation Information");
    doc.setFontSize(16);
    doc.setTextColor("Blue");
    doc.text(50, 130, "Event Information");
    doc.setFont("Helvertica", "Normal");
    doc.setTextColor("black");
    doc.setFontSize(16);
    doc.text(55, 160, "Event Name");
    doc.text(55, 180, "Event Date");
    doc.text(55, 200, "Event Time");
    doc.text(55, 220, "Location");
    doc.text(55, 240, "Days Event Occurs");

    doc.setFont("Helvertica", "bold");
    doc.setTextColor("Blue");
    doc.text(50, 300, "Service Provider's Information");
    doc.setFont("Helvertica", "Normal");
    doc.setTextColor("black");
    doc.text(55, 330, "Service Provider Name");
    doc.text(55, 350, "Service Type");
    doc.text(55, 370, "Service Provider Email");
    doc.text(55, 390, "Service Provider Tel");
    doc.text(55, 410, "NIC No");
    doc.text(55, 430, "Address");
    doc.text(55, 450, "Quotation Valid");
    doc.text(55, 470, "Quotation Terms");

    doc.setFont("Helvertica", "Normal");
    doc.setFontSize(16);
    doc.text(175, 160, ":");
    doc.text(175, 180, ":");
    doc.text(175, 200, ":");
    doc.text(175, 220, ":");
    doc.text(175, 240, ":");
    doc.text(185, 330, ":");
    doc.text(185, 350, ":");
    doc.text(185, 370, ":");
    doc.text(185, 390, ":");
    doc.text(185, 410, ":");
    doc.text(185, 430, ":");
    doc.text(185, 450, ":");
    doc.text(185, 470, ":");

    doc.setFont("Helvertica", "Normal");
    doc.text(185, 160, event.event_name);
    doc.text(185, 180, event.date_of_the_event);
    doc.text(185, 200, event.event_time);
    doc.text(185, 220, event.location);
    doc.text(185, 240, event.days_occurs.toString() + " " + "days");
    doc.text(195, 330, quotation.provider_id.user_name);
    doc.text(195, 350, quotation.provider_id.service_type);
    doc.text(195, 370, quotation.provider_id.email);
    doc.text(195, 390, quotation.provider_id.mobile.toString());
    doc.text(195, 410, quotation.provider_id.nic_no);
    doc.text(195, 430, quotation.provider_id.address);
    doc.text(195, 450, quotation.date_from);
    doc.text(260, 450, "to");
    doc.text(280, 450, quotation.date_to);
    doc.text(195, 470, quotation.terms);

    doc.setLineWidth(1.5);
    doc.line(50, 600, 420, 600);

    doc.setTextColor(100);
    doc.setFontSize(8);
    doc.text(50, 610, "©");
    doc.text(60, 610, year);
    doc.setTextColor("red");
    doc.text(75, 610, "COPYRIGHT");

    doc.setTextColor("black");
    doc.text(310, 610, "* ALL RIGHTS RESERVED BY");
    doc.setTextColor("blue");
    doc.text(395, 610, "Hex Clan");

    doc.addPage();

    doc.addImage(logo, "PNG", 40, 10, 50, 50);
    doc.setFont("Helvertica", "bold");
    doc.setTextColor(100);
    doc.text(100, 40, "THE BLISS");
    doc.setLineWidth(1.5);
    doc.line(50, 65, 420, 65);

    doc.setFontSize(16);
    doc.setFont("Helvertica", "bold");
    doc.setTextColor("Blue");
    doc.text(50, 110, "Quotation Items Details");

    doc.autoTable(columns, rows, {
      margin: { top: 160, bottom: 100, left: 60, right: 60 },
      theme: "grid",
    });

    doc.setLineWidth(1.5);
    doc.line(50, 600, 420, 600);

    doc.setTextColor(100);
    doc.setFontSize(8);
    doc.text(50, 610, "©");
    doc.text(60, 610, year);
    doc.setTextColor("red");
    doc.text(75, 610, "COPYRIGHT");

    doc.setTextColor("black");
    doc.text(310, 610, "* ALL RIGHTS RESERVED BY");
    doc.setTextColor("blue");
    doc.text(395, 610, "Hex Clan");

    doc.save("test.pdf");
  };

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
                    <Button
                      color="primary"
                      size="sm"
                      onClick={() => {
                        downloadPDF();
                      }}
                    >
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
                        <label className="ml-3"> </label>
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
                  <Row style={{ marginLeft: 20, marginTop: 10 }}>
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
                          {quotation.quotation_details &&
                            quotation.quotation_details.map((quotation_details) => (
                              <tr key={quotation_details._id}>
                                <td>{quotation_details.item_name} </td>
                                <td>{quotation_details.quantity} </td>
                                <td>
                                  {"Rs. "} {quotation_details.unit_price}
                                </td>
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
