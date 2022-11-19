import React from "react";

import { NavListMobile } from "./NavListMobile";

export default {
  title: "Molecules/NavListMobile",
  component: NavListMobile,
};

const Template = (args) => <NavListMobile {...args} />;

export const NavMobile = Template.bind({});

NavMobile.args = {};
