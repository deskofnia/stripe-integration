
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutFrom";

const PUBLIC_KEY = "pk_test_51MAXpuSB2PzXHtQy6doX70urVHG5eggTEPWilbgfAgyKvph3N2WLuoEnb1k0kSEwj9nEvwiaglDOYJAyU1cIHvZ700QXy7bGsD";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;