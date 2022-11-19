import React from "react";

import { NavLink } from "./NavLink";

export default {
  title: "Atoms/NavLink",
  component: NavLink,
};

const Template = (args) => <NavLink {...args} />;

export const Link = Template.bind({});

Link.args = {
  href: "#",
  value: "Resume",
};
