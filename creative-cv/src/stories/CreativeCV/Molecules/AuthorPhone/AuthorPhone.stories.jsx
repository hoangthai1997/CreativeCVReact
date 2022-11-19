import React from "react";

import { AuthorPhone } from "./AuthorPhone";

export default {
  title: "Molecules/AuthorPhone",
  component: AuthorPhone,
};

const Template = (args) => <AuthorPhone {...args} />;

export const Phone = Template.bind({});

Phone.args = {};
