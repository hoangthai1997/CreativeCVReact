import React from "react";
import { Header } from "../../Organisms/Header/Header";
import { Main } from "../../Templates/Main/Main";
import { Footer } from "../../Templates/Footer/Footer";
import "./Pages.scss";

export const Pages = () => {
  return (
    <body className="t-pages">
      <Header />
      <Main />
      <Footer />
    </body>
  );
};
