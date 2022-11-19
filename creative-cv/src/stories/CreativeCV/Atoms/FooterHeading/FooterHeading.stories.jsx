import React from "react";

import { FooterHeading } from "./FooterHeading";

export default {
  title: "Atoms/FooterHeading",
  component: FooterHeading,
};

const Template = (args) => <FooterHeading {...args} />;

export const HeadingFooter = Template.bind({});

HeadingFooter.args = {
  value: "Phone",
};
