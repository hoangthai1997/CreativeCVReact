import React from "react";

import { NavList } from "./NavList";

export default {
  title: "Molecules/NavList",
  component: NavList,
};

const Template = (args) => <NavList {...args} />;

export const List = Template.bind({});

List.args = {};
