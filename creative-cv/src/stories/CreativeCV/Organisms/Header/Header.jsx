import React from "react";

import "./Header.scss";
import { AuthorName } from "../../Atoms/AuthorName/AuthorName";
import { AuthorJob } from "../../Atoms/AuthorJob/AuthorJob";
import { NavList } from "../../Molecules/NavList/NavList";
import { NavListMobile } from "../../Molecules/NavListMobile/NavListMobile";

export const Header = () => {
  return (
    <header className="o-header">
      <h1>
        <AuthorName />
        <AuthorJob />
      </h1>
      <nav>
        <NavList />
        <NavListMobile />
      </nav>
    </header>
  );
};
