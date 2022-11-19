import React from "react";

import { Link } from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "#",
  size: "primary",
  value: "Resume",
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: "#",
  size: "secondary",
  value: "Projects",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  href: "#",
  size: "tertiary",
  value: "Contact",
};
