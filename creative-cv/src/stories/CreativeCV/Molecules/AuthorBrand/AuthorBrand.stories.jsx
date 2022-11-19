import React from "react";

import { AuthorBrand } from "./AuthorBrand";

export default {
  title: "Molecules/AuthorBrand",
  component: AuthorBrand,
};

const Template = (args) => <AuthorBrand {...args} />;

export const Brand = Template.bind({});

Brand.args = {};
