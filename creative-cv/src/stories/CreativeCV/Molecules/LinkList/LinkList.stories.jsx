import React from "react";

import { LinkList } from "./LinkList";

export default {
  title: "Molecules/LinkList",
  component: LinkList,
};

const Template = (args) => <LinkList {...args} />;

export const ProductLinkList = Template.bind({});

ProductLinkList.args = {};
