import React from "react";

import { Avatar } from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const AuthorAvatar = Template.bind({});

AuthorAvatar.args = {
  src: "https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg",
  alt: "Avatar",
};
