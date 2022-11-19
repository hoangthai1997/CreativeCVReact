import React from "react";

import { AuthorEmail } from "./AuthorEmail";

export default {
  title: "Molecules/AuthorEmail",
  component: AuthorEmail,
};

const Template = (args) => <AuthorEmail {...args} />;

export const Email = Template.bind({});

Email.args = {};
