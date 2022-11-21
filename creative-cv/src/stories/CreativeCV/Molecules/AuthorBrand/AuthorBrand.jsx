import React from "react";

import "./AuthorBrand.scss";
import { AuthorName } from "../../Atoms/AuthorName/AuthorName";
import { AuthorJob } from "../../Atoms/AuthorJob/AuthorJob";

export const AuthorBrand = () => {
  return (
    <div className="m-author-brand">
      <AuthorName />
      <AuthorJob />
    </div>
  );
};
