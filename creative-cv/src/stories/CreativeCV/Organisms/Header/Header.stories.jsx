import React from "react";

import { Header } from "./Header";

export default {
  title: "Organisms/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const HeaderWix = Template.bind({});

HeaderWix.args = {};
