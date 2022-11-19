import React from "react";
import { FooterHeading } from "../../Atoms/FooterHeading/FooterHeading";
import { EmailLink } from "../../Atoms/EmailLink/EmailLink";
import "./AuthorEmail.scss";

export const AuthorEmail = () => {
  let value = "Email";
  return (
    <dl className="m-author-email">
      <dt>
        <FooterHeading value={value} />
      </dt>
      <dd>
        <EmailLink />
      </dd>
    </dl>
  );
};
