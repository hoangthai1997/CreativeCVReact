import React from "react";

import { Main } from "./Main";

export default {
  title: "Templates/Main",
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const AuthorMain = Template.bind({});

AuthorMain.args = {};
