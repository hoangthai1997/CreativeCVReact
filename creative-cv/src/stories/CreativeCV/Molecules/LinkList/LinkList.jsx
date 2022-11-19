import React from "react";
import { Link } from "../../Atoms/Link/Link";
import "./LinkList.scss";

export const LinkList = () => {
  var linkList = [
    {
      size: "primary",
      value: "Resume",
    },
    {
      size: "secondary",
      value: "Projects",
    },
    {
      size: "tertiary",
      value: "Contact",
    },
  ];
  return (
    <ul className="m-link-list">
      {linkList.map((link, index) => (
        <li key={index}>
          <Link size={link.size} value={link.value} />
        </li>
      ))}
    </ul>
  );
};
