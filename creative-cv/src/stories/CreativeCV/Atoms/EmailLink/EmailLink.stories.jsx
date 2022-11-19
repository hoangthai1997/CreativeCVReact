import React from "react";

import { EmailLink } from "./EmailLink";

export default {
  title: "Atoms/EmailLink",
  component: EmailLink,
};

const Template = (args) => <EmailLink {...args} />;

export const Link = Template.bind({});

Link.args = {
  href: "#",
  value: "info@mysite.com",
};
