import React from "react";

import { AuthorBlog } from "./AuthorBlog";

export default {
  title: "Molecules/AuthorBlog",
  component: AuthorBlog,
};

const Template = (args) => <AuthorBlog {...args} />;

export const Blog = Template.bind({});

Blog.args = {};
