import React from "react";

import { Subheading } from "./Subheading";

export default {
  title: "Atoms/Subheading",
  component: Subheading,
};

const Template = (args) => <Subheading {...args} />;

export const ProductSubheading = Template.bind({});

ProductSubheading.args = {
  value: "A Bit About Me",
};
