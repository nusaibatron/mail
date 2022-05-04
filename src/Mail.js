import React from "react";
import company from './company.svg';
import recipient from './recipient.svg';


const Mail = (mail) => {
  console.log(mail)

  const { id, businessRecipient, from, forward, imageUrl, individualRecipient, scan, timestamp} = mail;
  mail = JSON.parse(JSON.stringify(mail));
  console.log(mail)
  let stat = "";
  let frwd = "";

  if ("scan" in mail == false) {
    let s = {status: ''}
    mail["scan"] = s;
    stat = "";
  } else {
    stat = "Scan: "
  }

  if ("forward" in mail == false) {
    let s = {status: ''};
    mail["forward"] = s;
    frwd = "";
  } else {
    frwd = "Forward: "
  }
  const fwd = frwd + mail.forward.status
  const sc = stat + mail.scan.status

  const date = new Date(timestamp).toLocaleDateString("en-US");
  return (
    <article className="card">
      <img src={imageUrl} alt={id} />
      <h5>{from}</h5>
      <h6>{businessRecipient}</h6>
      <h6> {sc}</h6>
      <h6> {fwd}</h6>
      <h6>{individualRecipient}</h6>
      <footer>{date}</footer>

    </article>
  );
};

export default Mail;
