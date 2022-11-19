import React from "react";

import "./AuthorBrand.scss";
import { AuthorName } from "../../Atoms/AuthorName/AuthorName";
import { AuthorJob } from "../../Atoms/AuthorJob/AuthorJob";

export const AuthorBrand = () => {
  return (
    <h1 className="m-author-brand">
      <AuthorName />
      <AuthorJob />
    </h1>
  );
};
