import React from "react";
import company from './company.svg';
import recipient from './recipient.svg';


const Mail = (mail) => {
  const { id, businessRecipient, from, forward, imageUrl, individualRecipient, scan, timestamp} = mail;
  const date = new Date(timestamp).toLocaleDateString("en-US");
  return (
    <article className="card">
      <img src={imageUrl} alt={id} />
      <h5>{from}</h5>
      {/* <h5 > ID: </h5> <h6>{id}</h6> */}
      <icon>
      {/* <img src={company}/> */}
      <h6>{businessRecipient}</h6>
      </icon>
      {/* // <h4> Forward: {forward}</h4> */}
      <h6>{individualRecipient}</h6>
      {/* // <h4> Scan: {scan}</h4> */}
      <footer>{date}</footer>

    </article>
  );
};

export default Mail;
