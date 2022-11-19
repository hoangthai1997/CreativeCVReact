import React from "react";

import { AuthorContact } from "./AuthorContact";

export default {
  title: "Organisms/AuthorContact",
  component: AuthorContact,
};

const Template = (args) => <AuthorContact {...args} />;

export const Contact = Template.bind({});

Contact.args = {};
