import React from "react";
import { AuthorPhone } from "../../Molecules/AuthorPhone/AuthorPhone";
import { AuthorEmail } from "../../Molecules/AuthorEmail/AuthorEmail";
import { AuthorBlog } from "../../Molecules/AuthorBlog/AuthorBlog";
import { Copyright } from "../../Atoms/Copyright/Copyright";
import "./AuthorContact.scss";

export const AuthorContact = () => {
  return (
    <address className="o-author-contact">
      <AuthorPhone />
      <AuthorEmail />
      <AuthorBlog />
      <Copyright />
    </address>
  );
};
