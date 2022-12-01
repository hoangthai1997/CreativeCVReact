import React from "react";

import { Pages } from "./Pages";

export default {
  title: "Templates/Pages",
  component: Pages,
};

const Template = (args) => <Pages {...args} />;

export const AuthorPages = Template.bind({});

AuthorPages.args = {};
