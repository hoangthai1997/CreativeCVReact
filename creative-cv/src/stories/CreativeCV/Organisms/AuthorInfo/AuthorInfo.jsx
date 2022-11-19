import React from "react";
import { Heading } from "../../Atoms/Heading/Heading";
import { Subheading } from "../../Atoms/Subheading/Subheading";
import { Text } from "../../Atoms/Text/Text";
import { LinkList } from "../../Molecules/LinkList/LinkList";
import "./AuthorInfo.scss";

export const AuthorInfo = () => {
  return (
    <section className="o-author-info">
      <Heading />
      <Subheading />
      <Text />
      <LinkList />
    </section>
  );
};
