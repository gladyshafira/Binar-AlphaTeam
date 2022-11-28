import * as Components from "./choice.styled";
import rock from "/assets/batu.svg";
import paper from "/assets/kertas.svg";
import scissors from "/assets/gunting.svg";
import React, { Fragment, useEffect, useState } from "react";

export const ChoiceComponent = ({ value, myChoice, onClick }) => {
  return (
    <>
      <Components.Icon
        bg={rock}
        data-id={myChoice}
        onClick={onClick}></Components.Icon>
      <Components.Icon
        bg={paper}
        data-id={myChoice}
        onClick={onClick}></Components.Icon>
      <Components.Icon
        bg={scissors}
        data-id={myChoice}
        onClick={onClick}></Components.Icon>
    </>
  );
};
