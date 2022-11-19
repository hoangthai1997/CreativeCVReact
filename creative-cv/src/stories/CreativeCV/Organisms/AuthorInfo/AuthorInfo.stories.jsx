import React from "react";

import { AuthorInfo } from "./AuthorInfo";

export default {
  title: "Organisms/AuthorInfo",
  component: AuthorInfo,
};

const Template = (args) => <AuthorInfo {...args} />;

export const Info = Template.bind({});

Info.args = {};
