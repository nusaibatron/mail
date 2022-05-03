import React from "react";
import company from './company.svg';
import recipient from './recipient.svg';


const Mail = (mail) => {
  console.log(mail)

  const { id, businessRecipient, from, forward, imageUrl, individualRecipient, scan, timestamp} = mail;
  mail = JSON.parse(JSON.stringify(mail));
  console.log(mail)

  if ("scan" in mail == false) {
    let s = {status: ''}
    mail["scan"] = s;
  }

  if ("forward" in mail == false) {
    let s = {status: ''};
    mail["forward"] = s;
  }
  const fwd = mail.forward.status
  const sc = mail.scan.status

  const date = new Date(timestamp).toLocaleDateString("en-US");
  return (
    <article className="card">
      <img src={imageUrl} alt={id} />
      <h5>{from}</h5>
      <h6>{businessRecipient}</h6>
      <h6> Scan: {sc}</h6>
      <h6> Forward: {fwd}</h6>
      <h6>{individualRecipient}</h6>
      <footer>{date}</footer>

    </article>
  );
};

export default Mail;
