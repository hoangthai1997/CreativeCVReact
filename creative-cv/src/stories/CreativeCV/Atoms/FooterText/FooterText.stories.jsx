import React from "react";

import { FooterText } from "./FooterText";

export default {
  title: "Atoms/FooterText",
  component: FooterText,
};

const Template = (args) => <FooterText {...args} />;

export const TextFooter = Template.bind({});

TextFooter.args = {
  value: "123-456-7890",
};
