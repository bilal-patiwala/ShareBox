import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MWv4mSBzC5fML4hW3c2w9CFQT0AJUbwuS1jtWRVByP89cGb6qnmAhJ8KtpXGjv3UDN0XMxmVnV0tPLnjCW4RJOB00YUXRCgxY");

export default function CheckoutForm() {
    let {authToken} = useContext(AuthContext)
  const [clientSecret, setClientSecret] = useState("");
    const location = useLocation()
    let navigate = useNavigate()
  useEffect(() => {
    paymentIntent()
  }, []);

  const paymentIntent = async () => {
    let response = await fetch("http://127.0.0.1:8000/create-payment-intent/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken.refresh}`
       },
        body: JSON.stringify({id:location.state.id}),
      })
      if(response.status === 226){
        navigate('/products')
      }
      console.log(response);
      let data = await response.json()
      console.log(data);
      setClientSecret(data.clientSecret)
  }

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
}