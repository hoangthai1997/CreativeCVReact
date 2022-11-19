import React from "react";
import { FooterHeading } from "../../Atoms/FooterHeading/FooterHeading";
import { FooterText } from "../../Atoms/FooterText/FooterText";
import "./AuthorPhone.scss";

export const AuthorPhone = () => {
  return (
    <dl className="m-author-phone">
      <dt>
        <FooterHeading />
      </dt>
      <dd>
        <FooterText />
      </dd>
    </dl>
  );
};
