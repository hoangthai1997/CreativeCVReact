import React from "react";

import { AuthorName } from "./AuthorName";

export default {
  title: "Atoms/AuthorName",
  component: AuthorName,
};

const Template = (args) => <AuthorName {...args} />;

export const Name = Template.bind({});

Name.args = {
  href: "#",
  value: "Nicol Rider",
};
