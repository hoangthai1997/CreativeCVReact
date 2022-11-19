import React from "react";

import { Footer } from "./Footer";

export default {
  title: "Templates/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const FooterPage = Template.bind({});

FooterPage.args = {};
