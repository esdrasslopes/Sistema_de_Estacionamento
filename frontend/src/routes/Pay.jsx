import { useState, useContext, useEffect } from "react";

import { ParkContext } from "../context/park";

import { parse, format } from "date-fns";

import "./Pay.css";

const Pay = () => {
  const [paymentMethod, setPaymentMethod] = useState();

  const { data, setData } = useContext(ParkContext);

  const [price, setPrice] = useState();

  const handlePayment = (method) => {
    setPaymentMethod(method);
  };

  const calculatePrice = (entryDate, exitDate) => {
    const date = parse(entryDate, "dd/MM/yyyy", new Date());
    const exit = parse(exitDate, "dd/MM/yyyy", new Date());

    date.setHours(0, 0, 0, 0);
    exit.setHours(0, 0, 0, 0);

    console.log("Entrada formatada:", date);
    console.log("Saída formatada:", exit);

    const differenceInTime = exit - date;

    console.log("Diference dos tempos" + differenceInTime);
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

    if (differenceInDays === 0) {
      setPrice(20);
    } else {
      const pricePark = differenceInDays * 20;
      console.log("O price do estacionamento é de " + price);
      setPrice(pricePark);
    }
  };

  useEffect(() => {
    calculatePrice(data.entryDate, data.exitDate);
  }, [data]);

  return (
    <div className="payment-container">
      <div className="car-info">
        <h1 className="car-title">Vehicle Information</h1>
        <div className="car-details">
          <p>
            <strong>Model :</strong>
            {data.carModel}
          </p>
          <p>
            <strong>Plate</strong>: {data.carPlate}
          </p>
          <p>
            <strong>Price: $</strong>
            {price} from {data.entryDate} to {data.exitDate}
          </p>
        </div>
      </div>

      <div className="payment-options">
        <h1>Choose a Payment Method</h1>
        <button className="credit" onClick={() => handlePayment("credit")}>
          <i className="fa fa-credit-card"></i>
          <span>Credit Card</span>
        </button>

        <button
          className="bank-slip"
          onClick={() => handlePayment("bank-slip")}
        >
          <i className="fa fa-barcode"></i>
          <span>Bank Slip</span>
        </button>

        <button className="pix" onClick={() => handlePayment("pix")}>
          <i className="fa fa-qrcode"></i>
          <span>Pix</span>
        </button>
      </div>

      {paymentMethod === "credit" && (
        <div className="credit-container">
          <form className="credit-form">
            <h2>Credit Card Details</h2>
            <div className="form-control">
              <label htmlFor="cardName">Cardholder Name:</label>
              <input
                type="text"
                id="cardName"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="0000 0000 0000 0000"
                maxLength="16"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="cvv">Card Verification Value:</label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Confirm Payment
            </button>
          </form>
        </div>
      )}

      {paymentMethod === "bank-slip" && (
        <div className="bankslip-container">
          <h2>Bank Slip Information</h2>
          <p>
            The bank slip will be generated with a 2-business-day validity.
            Click the button below to generate the slip.
          </p>
          <button className="generate-button">Generate Bank Slip</button>
          <button type="submit" className="submit-button">
            Confirm Payment
          </button>
        </div>
      )}

      {paymentMethod === "pix" && (
        <div className="qr-code-container">
          <h2>Scan the QR Code Below:</h2>
          <div className="qr-code">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Exemple"
              alt="QR Code for Pix payment"
            />
          </div>
          <button type="submit" className="submit-button">
            Confirm Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Pay;
