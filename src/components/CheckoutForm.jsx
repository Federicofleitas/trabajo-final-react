import React, { useState } from "react";
import PropTypes from "prop-types";

function CheckoutForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expiration, setExpiration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      firstname: firstName,
      lastname: lastName,
      address: address,
      document: documentNumber,
      creditcard: creditCard,
      expiration: expiration,
    };
    props.handleClick(orderData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Apellido:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Domicilio:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Número de documento:
        <input type="text" value={documentNumber} onChange={(e) => setDocumentNumber(e.target.value)} />
      </label>
      <label>
        Tarjeta de crédito:
        <input type="text" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} />
      </label>
      <label>
        Vencimiento de la tarjeta:
        <input type="text" value={expiration} onChange={(e) => setExpiration(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

CheckoutForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CheckoutForm;
