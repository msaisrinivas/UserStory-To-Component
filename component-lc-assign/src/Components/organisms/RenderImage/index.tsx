import React from "react";
import * as constant from "../../../utils/Constant";

interface Props {
  age?: number;
}

function RenderImage(props: Props) {
  const { age } = props;

  const selectImage = () => {
    if (age) {
      if (age > 0 && age <= 20) {
        return constant.Teen;
      } else if (age > 20 && age <= 50) {
        return constant.Adult;
      }
      return constant.Old;
    }
  };
  return (
    <img src={selectImage()} alt="Image" height={"400px"} width={"400px"} />
  );
}

export default RenderImage;
