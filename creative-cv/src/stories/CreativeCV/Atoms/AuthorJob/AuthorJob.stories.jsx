import React from "react";

import { AuthorJob } from "./AuthorJob";

export default {
  title: "Atoms/AuthorJob",
  component: AuthorJob,
};

const Template = (args) => <AuthorJob {...args} />;

export const Job = Template.bind({});

Job.args = {
  value: "Editor",
};
