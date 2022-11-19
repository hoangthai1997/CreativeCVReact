import React from "react";

import { Copyright } from "./Copyright";

export default {
  title: "Atoms/Copyright",
  component: Copyright,
};

const Template = (args) => <Copyright {...args} />;

export const CopyrightText = Template.bind({});

CopyrightText.args = {
  value: "© 2023 By Nicol Rider.",
};
