import React, { ReactNode } from "react";

const ContactUsWrapper = (props: { children: ReactNode }) => {
  return <div className="contact-us-wrapper">{props.children}</div>;
};

export default ContactUsWrapper;
