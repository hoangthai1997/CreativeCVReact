import React from "react";
import { Avatar } from "../../Atoms/Avatar/Avatar";
import { AuthorInfo } from "../../Organisms/AuthorInfo/AuthorInfo";
import "./Main.scss";

export const Main = () => {
  return (
    <main className="t-main">
      <Avatar />
      <AuthorInfo />
    </main>
  );
};
