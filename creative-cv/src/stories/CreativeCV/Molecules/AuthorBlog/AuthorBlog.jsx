import React from "react";
import { FooterHeading } from "../../Atoms/FooterHeading/FooterHeading";
import { IconLinkedln } from "../../Atoms/IconLinkedln/IconLinkedln";
import { IconTwitter } from "../../Atoms/IconTwitter/IconTwitter";
import "./AuthorBlog.scss";

export const AuthorBlog = () => {
  let value = "Follow Me";
  return (
    <dl className="m-author-blog">
      <dt>
        <FooterHeading value={value} />
      </dt>
      <dd>
        <IconLinkedln />
        <IconTwitter />
      </dd>
    </dl>
  );
};
