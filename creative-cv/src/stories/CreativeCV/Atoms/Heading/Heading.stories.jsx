import React from "react";

import { Heading } from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const AuthorHeading = Template.bind({});

AuthorHeading.args = {
  value: "Hello",
};
