import React from "react";

import { Text } from "./Text";

export default {
  title: "Atoms/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const ProductText = Template.bind({});

ProductText.args = {
  value:
    "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
};
