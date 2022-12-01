import React from "react";

import { CreativeCVPage } from "./CreativeCVPage";

export default {
  title: "Pages/CreativeCVPage",
  component: CreativeCVPage,
};

const Template = (args) => <CreativeCVPage {...args} />;

export const CreativeCV = Template.bind({});

CreativeCV.args = {};
