import React from "react";
import { Button } from "reactstrap";
import API from "variables/tokenURL";
// import './payment_modal.css'

const user = JSON.parse(localStorage.getItem("profile"));

const PaymentModal = ({
  orderId,
  name,
  amount,
  user_email,
  user_name,
  current_date,
  date_occur,
  boostTY,
}) => {
  // Put the payment variables here
  var payment = {
    sandbox: true, // if the account is sandbox or real
    merchant_id: "1218670", // Replace your Merchant ID
    return_url: "http://sample.com/return",
    cancel_url: "http://sample.com/cancel",
    notify_url: "http://sample.com/notify",
    order_id: orderId,
    items: name,
    amount: amount,
    currency: "LKR",
    first_name: user?.result?.firstName,
    last_name: user?.result?.lastName,
    email: "samanp@gmail.com",
    phone: "0771234567",
    address: "No.1, Galle Road",
    city: "Colombo",
    country: "Sri Lanka",
    delivery_address: "No. 46, Galle road, Kalutara South", // optional field
    delivery_city: "Kalutara", // optional field
    delivery_country: "Sri Lanka", // optional field
    custom_1: "", // optional field
    custom_2: "", // optional field
  };

  // Called when user completed the payment. It can be a successful payment or failure
  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    //Note: validate the payment and show success or failure page to the customer
  };

  // Called when user closes the payment without completing
  window.payhere.onDismissed = function onDismissed() {
    //Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
  };

  // Called when error happens when initializing payment such as invalid parameters
  window.payhere.onError = function onError(error) {
    // Note: show an error page
    console.log("Error:" + error);
  };

  function pay() {
    window.payhere.startPayment(payment);
    payBack();
  }

  function payBack() {
    if (boostTY == "event") {
      var pay_details = {
        type_id: orderId,
        user_name: user_name,
        user_email: user_email,
        total: amount,
        date_event_occur: date_occur,
        payment_date: current_date,
        type: boostTY,
        type_name: name,
      };
    }
    if (boostTY == "advertisment") {
      var pay_details = {
        type_id: orderId,
        user_name: user_name,
        user_email: user_email,
        total: amount,
        payment_date: current_date,
        type: boostTY,
        type_name: name,
      };
    }
    API.post("/payment/addpayment", pay_details)
      .then((res) => {
        console.lod(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Button className="mr-1 ml-1" color="info" size="lm" onClick={pay}>
      <span className="btn-inner--icon">
        <i className="ni ni-credit-card" />
      </span>
      <span className="btn-inner--text">Pay Now</span>
    </Button>
  );
};

export default PaymentModal;
