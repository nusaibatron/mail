import React from "react";

const Mail = (mail) => {
  const { id, businessRecipient, from, forward, imageUrl, individualRecipient, scan, timestamp} = mail;
  const date = new Date(timestamp).toLocaleDateString("en-US");
  return (
    <article className="card">
      <img src={imageUrl} alt={id} />
      <h5 > ID: </h5> <h6>{id}</h6>
      <h5> Business Recipient:</h5> <h6>{businessRecipient}</h6>
      {/* // <h4> Forward: {forward}</h4> */}
      <h5> From: </h5> <h6>{from}</h6>
      <h5> Individual Recipient: </h5> <h6>{individualRecipient}</h6>
      {/* // <h4> Scan: {scan}</h4> */}
      <h5> Date: </h5> <h6>{date}</h6>

    </article>
  );
};

export default Mail;
