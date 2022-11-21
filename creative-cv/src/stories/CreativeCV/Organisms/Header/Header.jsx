import React from "react";

import "./Header.scss";
import { AuthorBrand } from "../../Molecules/AuthorBrand/AuthorBrand";
import { NavList } from "../../Molecules/NavList/NavList";
import { NavListMobile } from "../../Molecules/NavListMobile/NavListMobile";

export const Header = () => {
  return (
    <header className="o-header">
      <h1>
        <AuthorBrand />
      </h1>
      <nav>
        <NavList />
        <NavListMobile />
      </nav>
    </header>
  );
};
