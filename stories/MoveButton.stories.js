import React from "react";

import { MoveButton } from "../components/MoveButton";

export default {
  title: "Example/Button",
  component: MoveButton,
};

const Template = (args) => <MoveButton {...args} />;

export const HomeMoveButton = Template.bind({});
HomeMoveButton.args = {
  label: "π λ¦¬μ€νΈλ‘ μ΄λ",
};
